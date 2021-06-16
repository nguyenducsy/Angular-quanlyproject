import { AbstractControl } from "@angular/forms";

export function name_saicuphap(control:AbstractControl): {[key: string]: any} | null {



     var forbidden = /[a-z]{0,}[0-9]{3,}/.test(control.value); //true
     var cam = /\s/.test(control.value); //true

     if(forbidden== true || cam == true){
         var valied = true
     }else valied = false


     return valied ? { 'forbiddenName' : {value: control.value} } : null;


}

