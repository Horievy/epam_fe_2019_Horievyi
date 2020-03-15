import {AbstractControl} from '@angular/forms';

export function dateValidator(control: AbstractControl) {
    const dateRegex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)))$/;
    if (!dateRegex.test(control.value)) {
        return {value: true};
    }
    return null;
}
