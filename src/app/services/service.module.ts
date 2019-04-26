import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService } from './service.index';

@NgModule({
  declarations: [],
  providers: [
    SettingsService,
    SidebarService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
