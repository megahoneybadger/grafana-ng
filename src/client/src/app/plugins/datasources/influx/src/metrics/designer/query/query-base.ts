import { Component, Directive, Input } from '@angular/core';

import { InfluxQuery } from '../../metrics.m';

@Directive()
export class BaseQueryComponent {

  @Input() query : InfluxQuery;
  
  
}