import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  // list: Pokemon[] = []

  // constructor(private listService: ListService) { }

  // ngOnInit(): void {
  //   this.listService.getAllPokemons().subscribe((list) => this.list = list);
  // }
}
