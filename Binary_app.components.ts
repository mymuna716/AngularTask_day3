//using binary property
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello this is done by binary property<h1>
  <hr color=yellow>
  <p> Expression : (5*10)= {{5*10}}</p>
  <p> {{'Trainer name :' +trainer_name}}</p>
  <p> Trainer is presenting : {{present?'yes':'no'}} </p>
  <p> Presenting : <img src='https://angular.lo/assets/images/logos/angular/{{imgpath}}'></p>
  <p> Details : {{getdetails()}}</p>`,
  styleUrls: []
})
export class AppComponent {
  title = 'app1';
  trainer_name:string='Maimoona';
  exp:number=1;
  present:boolean=true;

  imgpath:string='logo-nav@2x.png';
  company:string='impelsys';
  getdetails():String
 
  {
    return "exp : "+this.exp+" Representing company : "+this.company;

  }
}


