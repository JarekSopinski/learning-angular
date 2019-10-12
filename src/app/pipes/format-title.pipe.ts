import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTitle'
})

export class FormatTitle implements PipeTransform {

    transform(value:string, args?:any) {
        if (!value)
            return null;

            let result:string[] = [];
            const words:string[] = value.toLowerCase().split(' ');
            
            for (let i=0; i < words.length; i++){
                const word:string = words[i];
                if ( this.isPreposition(word) && i > 0 )
                    result.push(word);
                else
                    result.push(this.toTitleCase(word));
            }

        return result.join(' ');
    }

    private isPreposition(word:string): boolean {
        const prepositions:string[] = ['the', 'of'];
        return prepositions.includes(word);
    }

    private toTitleCase(word:string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

}