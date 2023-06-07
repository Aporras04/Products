import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // list: Pokemon[] = []

  // constructor(private listService: ListService) { }

  // ngOnInit(): void {
  //   this.listService.getAllPokemons().subscribe((list) => this.list = list);
  // }

}
