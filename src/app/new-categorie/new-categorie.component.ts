import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }
}
