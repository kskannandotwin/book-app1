import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertlog'
})
export class Lognumber implements PipeTransform {
    transform(value: any, ...args: any[]): number {
        return Math.log(value);
    }   
}
