import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],
})
export class BankDetailsComponent implements OnInit {
  bankform!: FormGroup;
  bankData: any[] = [];

  editMode: boolean=false;
  editbankId: string|null=null;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.bankData = JSON.parse(localStorage.getItem('bank_data') || '[]');
    this.bankform = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
  const editBank = history.state.editBank;
  if (editBank)
   {
    this.editMode = true;
    this.editbankId = editBank.id;
    
    this.bankform.patchValue({
      id: editBank.id,
      name: editBank.name,
      province: editBank.province,
      city: editBank.city
    });
   }
  }
  submitBankForm() {
    if (this.bankform.valid) {
      this.bankData.push(this.bankform.value);
      localStorage.setItem('bank_data', JSON.stringify(this.bankData));
      this.router.navigate(['/bank']);
      this.bankform.reset();
    }
  }
  close() {
this.router.navigate(['/bank']);
  }
}