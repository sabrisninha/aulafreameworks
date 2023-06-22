import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})

export class CriarUsuarioComponent {

isError = false;
isSucess = false;

CPF = ""
user = ""
pwd = ""
double = ""
  login() {

    console.log("user = " + this.user + "Password = " + this.pwd  )
    if ( this.pwd === this.double ) {
      console.log("login aprovado")
      this.isError = false;
      this.isSucess = true;
    }

    else {
      this.isError = true;
      this.isSucess = false;
    }

}
}


