export interface Organization {
  name: string;
  id: number;
}

export interface OrganizationState {
  organization: Organization;
}

export interface OrgProfileUpdateRequest{
  name: string;
}

export interface CreateOrgRequest{
  name: string;
}


