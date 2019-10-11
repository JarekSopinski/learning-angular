import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTitle'
})

export class FormatTitle implements PipeTransform {

    transform(value: string, args?: any) {
        if (!value)
            return null;

        return value.toLowerCase(); // initial test with simple lowercase
    }

}