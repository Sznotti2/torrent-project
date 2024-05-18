import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reverse',
	standalone: true
})
export class ReversePipe implements PipeTransform {

	transform(value: string, ...args: unknown[]): unknown {
		return value.split('').reverse().join('');
	}

}
