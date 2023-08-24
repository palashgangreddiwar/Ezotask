import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ezo-task-atm-managment',
  templateUrl: './ezo-task-atm-managment.component.html',
  styleUrls: ['./ezo-task-atm-managment.component.css'],
})
export class EzoTaskATMManagmentComponent implements OnInit {
  depositForm: FormGroup;
  withDrawForm: FormGroup;
  totalCount: any[] = [];
  sum: '0';
  Twothousand: any;
  Fivehundred: any;
  Twohundred: any;
  Onehundred: any;
  showTime: any;
  ifDepositAmount: boolean = false;
  cannotWithdraw: boolean = false;
  successfullWithdraw: boolean = false;

  availableDenominations: any = {
    2000: 10,
    500: 20,
    200: 30,
    100: 50,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.depositForm = this.fb.group({
      Twothousand: [0],
      Fivehundred: [0],
      Twohundred: [0],
      Onehundred: [0],
    });
    this.withDrawForm = this.fb.group({
      Withdrawamount: ['', Validators.required],
    });

    this.sum = '0';

    this.Twothousand = '0';
    this.Fivehundred = '0';
    this.Twohundred = '0';
    this.Onehundred = '0';

    // console.log('avai', this.availableDenominations);
  }

  submitTotalDeposit() {
    let totalCount = {
      Twothousand: this.depositForm.get('Twothousand').value,
      Fivehundred: this.depositForm.get('Fivehundred').value,
      Twohundred: this.depositForm.get('Twohundred').value,
      Onehundred: this.depositForm.get('Onehundred').value,
    };

    // this.totalCount = [];
    this.totalCount.push(totalCount);

    this.Twothousand = this.totalCount[0].Twothousand;
    this.Fivehundred = this.totalCount[0].Fivehundred;
    this.Twohundred = this.totalCount[0].Twohundred;
    this.Onehundred = this.totalCount[0].Onehundred;

    console.log('this.Twothousand', this.Twothousand);
    console.log('this.Fivehundred', this.Fivehundred);
    console.log('this.Twohundred', this.Twohundred);
    console.log('this.Onehundred', this.Onehundred);

    this.sum = this.totalCount.reduce((accumulator, object) => {
      return (
        accumulator +
        object.Twothousand * 2000 +
        object.Fivehundred * 500 +
        object.Twohundred * 200 +
        object.Onehundred * 100
      );
    }, 0);

    this.ifDepositAmount = true;
    const currentTime = new Date();
    this.showTime = currentTime;
  }

  submitWithdrawal() {
    console.log('this.totalCount', this.totalCount);
    const withdrawAmount = this.withDrawForm.get('Withdrawamount').value;

    let remainingAmount = withdrawAmount;

    for (const denomination in this.totalCount) {
      const countToWithdraw = Math.floor(remainingAmount / +denomination);
      if (countToWithdraw > 0) {
        const actualWithdrawn = Math.min(
          countToWithdraw,
          this.totalCount[denomination]
        );
        remainingAmount -= actualWithdrawn * +denomination;
        this.totalCount[denomination] -= actualWithdrawn;
        console.log(`Withdrawn ${actualWithdrawn} notes of ${denomination}`);
        this.cannotWithdraw = true;
        const currentTime = new Date();
        this.showTime = currentTime;
      }
    }

    if (remainingAmount === 0) {
      console.log('Withdrawal successful.');
      this.successfullWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
    } else {
      console.log('Withdrawal failed due to unavailable denominations.');
      this.cannotWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
    }
  }
}
