//showing how property value can be changed
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>Hello <h1>
  <hr color=yellow>
  <input id=test1 type=text value="mymu"> //see here the input value changes because its property
  <table border=2>
  <tr><td colspan={{value}}>A</td></tr> //here the colum span is a attritute you cant change like that
  <tr><td >B</td><td>C</td></tr>
  <tr><td >D</td><td>E</td></tr>
  <tr><td >F</td><td>G</td></tr>
  </table>
  `
  ,
  styleUrls: []
})
export class AppComponent {
  value:number=5;
}





