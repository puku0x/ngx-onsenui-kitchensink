import { Component, ViewChild, OnInit } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[app-dialogs]',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  dialogVisible = false;
  alertDialogVisible = false;
  toastVisible = false;
  modalVisible = false;
  popoverVisible = false;
  actionSheetVisible = false;
  timeoutID: any;

  /**
   * Modal
   */
  @ViewChild('modal') modal;

  /**
   * Onsen UI
   */
  $ons = ons;

  /**
   * Android
   */
  md = ons.platform.isAndroid();

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Show modal
   */
  showModal() {
    this.modal.nativeElement.show();
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => this.modal.nativeElement.hide(), 2000);
  }
}
