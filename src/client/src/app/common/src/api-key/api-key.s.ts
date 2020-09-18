import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { TextMessage } from '../settings/settings.m';
import { CreateApiKeyRequest, ApiKeyRaw, ApiKey } from './api-key.m';
import { BaseService } from '../_base/base-service';


@Injectable()
export class ApiKeysService extends BaseService {
  getApiKeys(): Observable<ApiKey[]> {
    return this
      .http
      .get<ApiKey[]>(`${this.baseUri}/auth/keys`, this.headers);

  }

  create( r: CreateApiKeyRequest): Observable<ApiKeyRaw> {
    return this
      .http
      .post<ApiKeyRaw>(`${this.baseUri}/auth/keys`, r, this.headers);

  }

  delete(id: number): Observable<TextMessage> {
    return this
      .http
      .delete<TextMessage>(`${this.baseUri}/auth/keys/${id}`, this.headers);

  }
}