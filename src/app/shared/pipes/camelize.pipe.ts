import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'camelize',
	standalone: true
})
export class CamelizePipe implements PipeTransform {

	transform(text: string, chars: string = '\\s'): string {
		return text
			.toLowerCase()
			.split(/[-_\s]/g)
			.filter((v: string) => !!v)
			.map((word: string, key: any) => {
				return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
			})
			.join('');
	}
}
