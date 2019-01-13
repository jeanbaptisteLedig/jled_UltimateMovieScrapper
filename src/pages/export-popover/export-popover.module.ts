import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportPopoverPage } from './export-popover';

@NgModule({
  declarations: [
    ExportPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportPopoverPage),
  ],
})
export class ExportPopoverPageModule {}
