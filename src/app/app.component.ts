import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tipoSelecionado: string = 'password';
  public isSenhaVisivel: boolean = false;

  public trocaVisibilidadeSenha (){
    this.isSenhaVisivel = !this.isSenhaVisivel;
    if (this.isSenhaVisivel){
      this.tipoSelecionado = 'text';
    }
    else{
      this.tipoSelecionado = 'password';
    }    
  }
}
