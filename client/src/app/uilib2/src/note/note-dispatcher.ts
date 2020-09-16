import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable()
export class Notes {
  private static _service: MessageService;

  constructor( private messageService: MessageService ){
    Notes._service = messageService;
  }

  static error( message : string, details: string = null ){
    Notes
      ._service
      .add({
        key: 'noteError',
        severity:'error',
        summary:message,
        detail: details,
        closable: false
      });
  }

  static success( message : string ){
    Notes
      ._service
      .add({
        key: 'noteSuccess',
        severity:'success',
        summary:message,
        closable: false
      });
  }
}