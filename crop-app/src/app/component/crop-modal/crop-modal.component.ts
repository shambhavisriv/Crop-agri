import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Crop } from 'src/app/model/crop';

@Component({
  selector: 'app-crop-modal',
  templateUrl: './crop-modal.component.html',
  styleUrls: ['./crop-modal.component.css']
})
export class CropModalComponent {
  crop: Crop;

  constructor(
    public dialogRef: MatDialogRef<CropModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.crop = data.crop;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
