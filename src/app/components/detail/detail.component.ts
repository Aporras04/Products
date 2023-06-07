import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product!: Pokemon;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const identifier: String = this.activatedRoute.snapshot.paramMap.get('id') as String
    console.log('identifier --> ', identifier);

    this.listService.getProductById(identifier).subscribe((product) => {
      if (!product) {
        return this.router.navigateByUrl('/');
      }
      this.product = product;
      return console.log("Image --> ", this.product)
    })
  }
}
