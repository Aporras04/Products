import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list: Pokemon[] = []

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getAllPokemons().subscribe((list) => this.list = list);
  }
}
