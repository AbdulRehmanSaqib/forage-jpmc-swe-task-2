declare module 'react' {
    interface HTMLAttributes<T> {
      view?: string;
      'column-pivots'?: string;
      'row-pivots'?: string;
      columns?: string;
      aggregates?: string;
    }
  }
  