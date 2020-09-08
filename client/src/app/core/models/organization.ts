import { Role } from './settings';

export interface Organization {
  name: string;
  id: number;
}

export interface OrganizationState {
  organization: Organization;
}

export interface CreateOrgRequest {
  name: string;
}

export interface UpdateOrgRequest extends CreateOrgRequest{

}

export interface UpdateOrgMemberRequest {
  role: Role;
}

export interface UserOrgMembership{
  name: string;
  orgId: number;
  role: Role;
} 


