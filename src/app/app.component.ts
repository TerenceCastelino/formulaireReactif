import { Component } from '@angular/core';
// 2 Importer les dependances 
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulaireReactif';
  //3 FormGroup declaration
  monFormGroup! : FormGroup
oui:boolean =false
nomValues! : string 
nomValue! : string 
laDate! : Date

//4 constructor pour le FormBuilder 
constructor(private _monFormBuilder : FormBuilder){
  this.monFormGroup = this._monFormBuilder.group({
    nom :["",Validators.required],
    email : ["",Validators.required],
    date:["",Validators.required]
  })
}
// recuperer la valeur de mes input 
methodeSubmit(){
  // si il est valide 
  if (this.monFormGroup.valid) {
    //recuperer l input en question
   this.nomValue = this.monFormGroup.get('nom')?.value
    this.oui = true
// recuperer un objet
    this.nomValues = this.monFormGroup.value
    
    console.log(this.nomValue);
    console.log(this.nomValues);
    
    this.laDate = this.monFormGroup.get('date')?.value
    
   
    
  }else{
    console.log("fonctionne PAS!!!!");
    this.oui = false
    
  }
  
}

}
