import { Pipe, PipeTransform } from '@angular/core';
import { Crop } from './model/crop';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(crops: Crop[] | undefined, filterText: string): Crop[] | undefined {
    console.log('Filtering crops:', crops);
    console.log('Filter text:', filterText);
    if (!crops || !filterText) {
      return crops;
    }

    const normalizedFilter = filterText.toLowerCase();

    return crops.filter(
      (crop) =>
        crop.crop_name.toLowerCase().includes(normalizedFilter)
    );
  }
}
