import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface ModalData {
  showCloseBtn: boolean;
  showSubmitBtn: boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public dialogRef = inject(MatDialogRef<ModalComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partial<ModalData>) {}

  @Output() submitEvent = new EventEmitter();

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  handleSubmit(): void {
    //this.dialogRef.close(false);
    this.submitEvent.emit();
  }
}
