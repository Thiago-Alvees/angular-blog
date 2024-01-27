import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  /*O Input chama o elemento criado com a pré definição */
  @Input()
  photoBig:string = "https://www.softzone.es/app/uploads-softzone.es/2020/03/loren-ipsum-generador.jpg"
  @Input()
  titleCard:string = "Lorem Ipsum"
  @Input()
  descriptionCard:string = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado."
}
