import { Pipe, PipeTransform } from '@angular/core';
import { Content } from "../../helper-files/content-interface";

@Pipe({
  name: 'contentPipe'
})
export class ContentPipePipe implements PipeTransform {

  transform(contentArray: Content[], type: string): Content[] {
    return contentArray.filter(c => c.type?.includes(type))
  }
}
