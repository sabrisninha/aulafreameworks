import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent {
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const dados = nav?.extras.state;
    console.log(dados);
  }
  isError= false;
  isSucess=false;




  ngOnInit(): void {}

  addMembros() {
   
    // console.log(this.responsavel.value);
    // console.log(this.dt_inicio.value);
    // console.log(this.dt_fim.value);
    // console.log(this.tasks);

    
  }

}
