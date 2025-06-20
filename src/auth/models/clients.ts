export interface Clients{
  "id"?: string,
  "first_name": string,
  "last_name": string,
  "phone"?: number,
  "email"?: string,
  "registration_date"?: Date,
  "dni"?: string,
  "status"?: string,
  "company": string,
  "created_at"?: Date,
}
export interface ClientsList{
  Clients: Clients[];
}
