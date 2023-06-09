import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list: Pokemon[] = [];
  loading = true;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.loading = true;
    this.listService.getAllPokemons().subscribe((list) => this.list = list);
    setTimeout(() => {
      this.loading = false;
    },
      2000);
  }
}
