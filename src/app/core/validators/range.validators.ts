import {AbstractControl} from '@angular/forms';

export function rangeValidator(control: AbstractControl): { range: true} | null {
    if (control.value !== undefined && (isNaN(control.value)) || control.value < 1 || control.value > 600) {
        return { range: true};
    }
    return null;
}
