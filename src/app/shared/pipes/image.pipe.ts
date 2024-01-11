import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  hostFull: string = environment.hostFull;

  transform(image: string): unknown {
    if (image) {
      if (image.startsWith('http')) {
        return image;
      }
      return this.hostFull + image;
    }
    return './assets/img/dashboard/no-image.png';

  }

}
