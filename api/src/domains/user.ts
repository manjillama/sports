export interface User {
  id: number;
  employeeId: number;
  userRoleId: number;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}