
export interface OrgUser {
  avatarUrl?: string;
  email?: string;
  name?: string;
  lastSeenAt?: string;
  lastSeenAtAge?: string;
  login: string;
  orgId: number;
  orgName: string;
  role: string;
  //userId: number;
  id:number;
  isRoot: boolean;
}

export interface User {
  id: number;
  label: string;
  avatarUrl: string;
  login: string;
}

export interface Invitee {
  code: string;
  createdOn: string;
  email: string;
  emailSent: boolean;
  emailSentOn: string;
  id: number;
  invitedByEmail: string;
  invitedByLogin: string;
  invitedByName: string;
  name: string;
  orgId: number;
  role: string;
  status: string;
  url: string;
}

export interface UsersState {
  users: OrgUser[];
  invitees: Invitee[];
  searchQuery: string;
  canInvite: boolean;
  externalUserMngLinkUrl: string;
  externalUserMngLinkName: string;
  externalUserMngInfo: string;
  hasFetched: boolean;
}

export interface UserState {
  //starredDashboards: DashboardSearchHit[];
}

export interface UserToken {
	message: string;
	token: string;
}


export interface UpdateUserRequest{
  name: string;
  login: string;
  email: string;
}

export interface CreateUserRequest extends UpdateUserRequest{
  password: string 
}

export interface UpdateUserPasswordRequest{
  password: string 
}
