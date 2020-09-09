import { Role } from './settings';

export interface ApiKey {
  id: number;
  name: string;
  role: Role;
}

export interface ApiKeyRaw {
  id: number;
  key: string;
  name: Role;
}

export interface CreateApiKeyRequest {
  name: string;
  role: Role;
}
