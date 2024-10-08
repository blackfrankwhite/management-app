export interface Sale {
  created_at: Date | string;
  date: Date | string;
  id: number;
  updated_at: Date | string;
  total_amount: number;
  total_price: number;
}

export interface SaleRecord {
  id: number;
  entity_id: number;
  amount: number;
  price: number;
  accounting_id?: number;
}

export interface SalePageFilter {
  start_date: string;
  end_date: string;
}

export interface AddSaleInterface {}
