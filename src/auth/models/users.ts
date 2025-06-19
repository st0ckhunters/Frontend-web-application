// src/app/models/users.ts
export interface User {
  id: string;
  organization_id: string;
  username: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  profile_image_url?: string;
  role: string;
  created_at: Date;
}

export interface UserList {
  users: User[];
}
