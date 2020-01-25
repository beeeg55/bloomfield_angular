import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name : 'reverseString'
})
export class reverseStringPipe implements PipeTransform{
    transform(value: string): string{
        let result: string = ""
        for(let i =value.length-1; i >= 0; i--){
            result +=value.charAt(i);
        }
        return result;
    }
}