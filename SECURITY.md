# Securing the OmniArk Web Panel

Deployment-side security setup for the headless web panel (port 17761). Two independent auth
toggles — **both must be enabled** or the panel is wide open.

## 1. Backend auth (session middleware on `/api/*`)

The app's built-in auth stack: bcrypt-hashed password + 24h httpOnly/sameSite=strict session
cookie. Guarded via `--auth-enabled` CLI flags in the systemd unit.

**systemd unit** (`/etc/systemd/system/omniark-aasm.service`):

```ini
[Service]
User=novaadmin
Group=novaadmin
Environment=DISPLAY=:99
EnvironmentFile=/etc/omniark-aasm.env
ExecStart=/usr/bin/npx electron electron/main.js --headless --no-sandbox --disable-gpu --port=17761 --auth-enabled --username=${AUTH_USERNAME} --password=${AUTH_PASSWORD}
Restart=on-failure
```

**Secrets file** (`/etc/omniark-aasm.env`, `chmod 600`, root-owned — single source of truth):

```
AUTH_ENABLED=true
AUTH_USERNAME=CyrixJD115
AUTH_PASSWORD=<strong-generated>
```

Generate: `openssl rand -hex 12`. Rotate by editing the env file + `systemctl restart omniark-aasm`.
The bcrypt hash persists to `~/.local/share/cerious-aasm/data/auth-config.json` (0600).

> **Pitfall:** in headless mode `application.service.ts` ALWAYS passes an `authOptions` object to
> the web server — `{enabled:false, username:'', password:''}` when the flag is absent — which
> clobbers any env-only config in the forked child. The `--auth-enabled` + `--password=` flags in
> ExecStart are mandatory; `EnvironmentFile` alone does NOT enable auth. Known limitation: the
> expanded password is visible in `ps aux` (argv design).

## 2. Frontend UI gate (login redirect)

The Angular `authGuard` reads `authenticationEnabled` from the global config BEFORE hitting the
API. If false, the panel loads straight in with no login screen even when the backend is locked.

**`~/.local/share/cerious-aasm/global-config.json`:**

```json
{
  "authenticationEnabled": true,
  "authenticationUsername": "CyrixJD115",
  ...
}
```

Flipped with:

```bash
sudo sed -i 's/"authenticationEnabled": false/"authenticationEnabled": true/; s/"authenticationUsername": ""/"authenticationUsername": "CyrixJD115"/' /home/novaadmin/.local/share/cerious-aasm/global-config.json
```

Read live on each request — no restart needed.

## Verification

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:17761/api/hello           # 401 without session
curl -s -X POST http://localhost:17761/api/login -H "Content-Type: application/json" \
  -d '{"username":"CyrixJD115","password":"wrong"}' -w "\n%{http_code}\n"                  # 401
```

## Known limitations

- `/ws` WebSocket is unauthenticated but main only handles registered channels (e.g.
  `get-log-file-path`) — low risk.
- Password visible in `ps` — inherent to argv-based config. Tailscale/WireGuard-only exposure
  is the next hardening step.