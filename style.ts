import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:
  `
  <h1 >Examples for attribute directives </h1>
  <div style='color:red' > Class Binding.... </div>
  <table border=1>
  <tr><td>{{arr[0]}}</td>
  <td><button class= 'classUnderline'> button 1 </button>
  </td></tr>
  <tr><td>{{arr[1]}}</td>
  <td><button [class.boldClass]= 'boldClass'> button 2 </button>
  </td></tr>
  <tr><td>{{arr[2]}}</td>
  <td><button class= 'classUnderline classColor'> button 3 </button>
  </td></tr>
  <tr><td>{{arr[3]}}</td>
  <td><button [ngClass]= 'addClasses()'> button 4 </button>
  </td></tr>
  </table>

  <div [ngClass]="'boldClass'" > maimoona </div>
  
  <div [ngClass]="'boldClass'" > sami </div>
  
<div style='color:red' > Style Binding....</div>
  <button style='color:aqua'
          [style.font-weight]="isBold? 'bold':'normal'"> new button </button>
  
   <button style='color: pink' 
           [ngStyle]="addStyles()"> My Button </button>
    <div style='color:blue' [style.font-weight]="isBold? 'bold':'normal'" > 
         hellooooo
    </div>  
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  boldClass: boolean = true;
  applyItalicsClass : boolean=true;
  isBold:boolean = true;
  fontSize=30;
  arr :number[]=[1,2,3,4,5];
  addClasses()
  {
    let classes={
      boldClass : this.boldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;
  }
  
  addStyles()
  {
    let styles = {   
      'font-weight' : this.boldClass ? 'Bold': 'normal',
      'font-size.px': this.fontSize
  };
   return styles;
} 
}
