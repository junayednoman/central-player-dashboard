// Define interface for table data
export interface EarningTableData {
  id: string;
  serial: string;
  user: {
    _id: string;
    name: string;
    email: string;
    photoUrl: string;
  };
  amount: number;
  subscriptionType: string;
  purchaseDate: string;
  transaction_id: string;
}

// Define props interface
export interface EarningOverviewTableProps {
  pagination?: boolean;
  limit?: number;
}
