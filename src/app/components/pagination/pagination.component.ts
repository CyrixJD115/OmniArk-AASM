import { Component, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `
    <div class="pagination" *ngIf="totalPages > 1">
      <button class="btn btn-sm btn-ghost" [disabled]="page <= 1" (click)="go(page - 1)">
        <iconify-icon icon="material-symbols:chevron-left" class="shrink-0"></iconify-icon>
        Prev
      </button>
      <span class="pagination-pages">
        <button
          *ngFor="let p of pageNumbers"
          class="page-num"
          [class.active]="p === page"
          (click)="go(p)"
          [disabled]="p < 0">{{ p < 0 ? '...' : p }}</button>
      </span>
      <button class="btn btn-sm btn-ghost" [disabled]="page >= totalPages" (click)="go(page + 1)">
        Next
        <iconify-icon icon="material-symbols:chevron-right" class="shrink-0"></iconify-icon>
      </button>
    </div>
    <div class="pagination-info" *ngIf="total > 0">
      {{ total }} total — page {{ page }} / {{ totalPages }}
    </div>
  `,
  styles: [`
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    .pagination-pages { display: flex; align-items: center; gap: 0.25rem; }
    .page-num {
      min-width: 2rem;
      height: 2rem;
      padding: 0 0.4rem;
      border-radius: 6px;
      border: 1px solid #294E6B;
      background: #0A1C30;
      color: #7C93A3;
      font-weight: 700;
      font-size: 0.8rem;
      font-family: 'Montserrat', 'Inter', sans-serif;
      cursor: pointer;
      transition: all 150ms;
    }
    .page-num:hover:not(:disabled) { border-color: #43A5D5; color: #9DB1B8; }
    .page-num.active {
      background: #0A69C5;
      border-color: #43A5D5;
      color: #fff;
      box-shadow: 0 0 10px rgba(67, 165, 213, 0.35);
    }
    .page-num:disabled { cursor: default; border-color: transparent; background: transparent; }
    .pagination-info {
      text-align: center;
      margin-top: 0.4rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #54768F;
      font-family: 'Montserrat', 'Inter', sans-serif;
    }
  `]
})
export class PaginationComponent {
  @Input() total = 0;
  @Input() page = 1;
  @Input() pageSize = 25;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / Math.max(1, this.pageSize)));
  }

  get pageNumbers(): number[] {
    const tp = this.totalPages;
    const cur = Math.min(this.page, tp);
    const nums = new Set<number>([1, tp, cur - 1, cur, cur + 1]);
    const sorted = Array.from(nums).filter(n => n >= 1 && n <= tp).sort((a, b) => a - b);
    const out: number[] = [];
    let prev = 0;
    for (const n of sorted) {
      if (n - prev > 1) out.push(-1);
      out.push(n);
      prev = n;
    }
    return out;
  }

  go(p: number): void {
    if (p < 1 || p > this.totalPages || p === this.page) return;
    this.pageChange.emit(p);
  }
}