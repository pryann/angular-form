import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Super Strength', 'Super Agility', 'Super Toughness', 'Super Intelligence'];
  model = new Hero(1, 'Hulk', this.powers[2], 'Bruce Banner');
  isSubmitted = false;
  
  constructor() { 
    console.log(this.model.name);
  }

  // onChange(event: Event) {
  //   this.model.name = (event.target as HTMLInputElement).value;
  // }

  onSubmit():void {
    this.isSubmitted = true;
  }

  ngOnInit(): void {
  }

}
