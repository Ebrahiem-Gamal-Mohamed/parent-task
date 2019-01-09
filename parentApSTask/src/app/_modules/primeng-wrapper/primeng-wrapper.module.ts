import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    SidebarModule,
    ToastModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  exports: [
    DialogModule,
    SidebarModule,
    ToastModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ConfirmDialogModule
  ]
})
export class PrimengWrapperModule { }
