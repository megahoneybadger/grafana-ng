import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TextMessage } from '../settings/settings.m';
import { CreateApiKeyRequest, ApiKeyRaw, ApiKey } from './api-key.m';
import { BaseService } from '../_base/base-service';


@Injectable()
export class ApiKeysService extends BaseService {
  getApiKeys(): Observable<ApiKey[]> {
    return this.get<ApiKey[]>(`auth/keys`);
  }

  create( r: CreateApiKeyRequest): Observable<ApiKeyRaw> {
    return this.post<ApiKeyRaw>(`auth/keys`, r);
  }

  remove(id: number): Observable<TextMessage> {
    return this.delete<TextMessage>(`auth/keys/${id}`);
  }
}