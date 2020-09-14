import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

 
  employees:any[];
   constructor()
   {
    this.employees=[
   
    {empno:1001, name:'Mymu' , salary:5000, DOB:'07-07-1997'},
    {empno:1002, name:'Sami' , salary:5000, DOB:'08-07-1997'},
    {empno:1003, name:'Tashi' , salary:5000, DOB:'07-03-1997'},
    {empno:1004, name:'Zafar' , salary:5000, DOB:'11-07-1997'},
    {empno:1005, name:'Myurial' , salary:5000, DOB:'07-12-1997'}



  ];
  }
getemployees():void{
  this.employees=[
    {empno:1001, name:'Mymu' , salary:5000, DOB:'07-07-1997'},
    {empno:1002, name:'Sami' , salary:5000, DOB:'08-07-1997'},
    {empno:1003, name:'Tashi' , salary:5000, DOB:'07-03-1997'},
    {empno:1004, name:'Zafar' , salary:5000, DOB:'11-07-1997'},
    {empno:1005, name:'Myurial' , salary:5000, DOB:'07-12-1997'},

    {empno:1006, name:'Zafar' , salary:5000, DOB:'11-07-1997'},
    {empno:1007, name:'Myurial' , salary:5000, DOB:'07-12-1997'}
  ]
}
trackByEmpno(index:number,employee:any):void{

  return employee.empno;
}

Info:string="Impelsys provides end-to-end solutions across digital product life,content and courseware production, enrichment, transformation, monetization to delivery and mobility.";
 HeadQuaters:string="New york,USA";
 Published :number= 2000;
 No_Employees:number=2045;
 showDetails:boolean=false;
 toggleShow():void{
   this.showDetails=!this.showDetails;
 }
}
