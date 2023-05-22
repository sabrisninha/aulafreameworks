import { Component } from '@angular/core';


@Component({

  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
image = false;
  isError = false;
  isSucess = false;


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

