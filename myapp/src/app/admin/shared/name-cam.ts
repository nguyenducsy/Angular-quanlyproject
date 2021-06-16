import { AbstractControl } from "@angular/forms";

export function name_cam(control:AbstractControl): {[key: string]: any} | null {

     var hangtrang = /hangtrang/i.test(control.value);
     var matuy = /matuy/i.test(control.value);

     if(hangtrang == true || matuy == true){
          var valied = true
     }else valied = false

     return valied ? { 'hangcamName' : {value: control.value} } : null;


}

