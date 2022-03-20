import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Member {
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Gender: "male" | "female";
  PhoneNumber: string;
  HomeAddress: string;
  EmailAddress: string;
}

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.css']
})
export class MembershipFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  membershipForm: FormGroup = this.formBuilder.group({
    FirstName: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    MiddleName: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    LastName: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    Gender: ["", Validators.compose([Validators.required, Validators.minLength(4)])],

    EducationalStatus: ['', [Validators.compose([Validators.required])]],
    FieldOfStudy: ['', [Validators.compose([Validators.required])]], 
    SupportType: ['', Validators.compose([Validators.required])],

    Country:['', Validators.required], 
    City: ['', Validators.required], 
    Email: ["", Validators.compose([Validators.required, Validators.email])],
    PhoneNumber: ["", Validators.compose([Validators.required, Validators.minLength(10)])]
  });

  get EducationalStatus(){
    return this.membershipForm.get("EducationalStatus")
  }
  get FieldOfStudy(){
    return this.membershipForm.get("FieldOfStudy")
  }
  get SupportType(){
    return this.membershipForm.get("SupportType")
  }
  
  get PhoneNumber(){
    return this.membershipForm.get("PhoneNumber")
  }
  get Email(){
    return this.membershipForm.get("Email")
  }
  get City(){
    return this.membershipForm.get("City")
  }

  get Gender(){
    return this.membershipForm.get("Gender")
  }
  get LastName(){
    return this.membershipForm.get("LastName")
  }
  get MiddleName(){
    return this.membershipForm.get("MiddleName")
  }
  get FirstName(){
    return this.membershipForm.get("FirstName")
  }

  resetForm(){
    this.membershipForm.markAsPristine();
    this.membershipForm.markAsUntouched();
    this.membershipForm.reset();
  }

  SaveMemberInformation() {
    const formData = this.membershipForm.getRawValue();
          const member: Member = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      MiddleName: formData.MiddleName,
      Gender: 'male',
      PhoneNumber: formData.PhoneNumber,
      HomeAddress: formData.HomeAddress,
      EmailAddress: formData.Email
    }
    console.log(member)
  }




}
