import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

title ='Volvo Parts details';
products:any = [
  {Partname :"Volvo TAD540 - 143 HP", Description:"Established in the year 1971, Techno Machine Tools", ContactEmail:"Bikash12@volvo.com", Country :"india"},
  {Partname :"Volvo TAD541 - 175 HP",Description:"Established in the year 1956, Techno Machine Tools",ContactEmail:"stphen@volvo2.com",Country :"Usa"},
  {Partname :"Volvo TAD542 - 218 HP",Description:"Established in the year 1994, Techno Machine Tools",ContactEmail:"jhon123@volvo3.com",Country :"swden"},
  {Partname :"Volvo TAD620 - 211 HP",Description:"Established in the year 1984, Techno Machine Tools",ContactEmail:"medline@volvo4.com",Country :"Brazil"},
  {Partname :"Volvo TAD720 - 237 HP",Description:"Established in the year 1992, Techno Machine Tools",ContactEmail:"jhonluk@volvo5.com",Country :"France"},
  {Partname :"Volvo TAD721 - 265 HP",Description:"Established in the year 1988, Techno Machine Tools",ContactEmail:"stev21@volvo5.com",Country :"Poland"}
];

storeData:any={};
updateData:any={};
showMe:boolean = false;
public partDetails:FormGroup;

constructor(){
  this.partDetails = new FormGroup({
    Partname : new FormControl('', Validators.required),
    Description : new FormControl('', Validators.required),
    ContactEmail : new FormControl('',[Validators.pattern('^[a-z]{4}[@]{1}[a-z]{4}[.]{1}[a-z]{3}$')]),
    country : new FormControl('', Validators.required)
 
  });
}

public onFormSubmit():void{
  console.log(this.partDetails.value);
}
addParts(){
 this.products.push(this.storeData);
this.storeData={};

}



deleteParts(i){
  this.showMe =!true;
 this.products.splice(i,1);
  }
 myValue;
 editField(k){
  this.showMe =!false;
     this.updateData.Partname = this.products[k].Partname;
    this.updateData.Description = this.products[k].Description;
    this.updateData.ContactEmail = this.products[k].ContactEmail;
    this.updateData.Country = this.products[k].Country;
    this.myValue = k;
   
     }

     updateParts(){
       let k = this.myValue;
      for(let i=0; i<this.products.length;i++){
        if(i==k){
          this.products[i]=this.updateData;
          this.updateData ={};
        
        }

      }
     }

}
