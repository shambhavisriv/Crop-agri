import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Crop } from 'src/app/model/crop';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrls: ['./crop-card.component.css']
})
export class CropCardComponent {
  @Input() crop!: Crop;
  @Output() openModal: EventEmitter<Crop> = new EventEmitter<Crop>();
}
