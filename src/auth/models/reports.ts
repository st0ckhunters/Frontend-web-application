export interface Report {
  id: string;
  user_id: string;
  report_type: 'sales' | 'inventory';
  generated_date: Date;
  file_url: string;
  parameters: {
    date: string;
  };
  created_at: Date;
}

export interface ReportList {
  reports: Report[];
}
