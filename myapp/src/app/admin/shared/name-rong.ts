import { AbstractControl } from "@angular/forms";

export function name_rong(control:AbstractControl): {[key: string]: any} | null {



     var valied = /[0-9 a-z]/.test(control.value); //true




     return !valied ? { 'rong' : {value: control.value} } : null;


}

