import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trueFalseSad: boolean = false;
  trueFalseSoSo: boolean = false;
  trueFalseHappy: boolean = false;

  constructor() { }
    tt = "works";
  ngOnInit() {
  }

  sadFunction(){
    this.trueFalseSoSo = false;
    this.trueFalseHappy = false;
    this.trueFalseSad = true;

    return true;
  }

  soSoFunction(){
    this.trueFalseSad = false;
    this.trueFalseHappy = false;
    this.trueFalseSoSo = true;
    return true;
  }

  happyFunction(){
    this.trueFalseSad = false;
    this.trueFalseSoSo = false;
    this.trueFalseHappy = true;
    return true;
  }

}
