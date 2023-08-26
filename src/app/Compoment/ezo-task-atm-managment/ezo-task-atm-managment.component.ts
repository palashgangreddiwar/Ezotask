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
  totalCounts = [];
  sum: number = 0;
  Twothousand: any;
  Fivehundred: any;
  Twohundred: any;
  Onehundred: any;
  showTime: any;
  ifDepositAmount: boolean = false;
  cannotWithdraw: boolean = false;
  successfullWithdraw: boolean = false;
  totalAvailableBalance: any;

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

    this.sum = 0;

    this.Twothousand = 0;
    this.Fivehundred = 0;
    this.Twohundred = 0;
    this.Onehundred = 0;
  }

  submitTotalDeposit() {
    let totalCount = {
      Twothousand: this.depositForm.get('Twothousand').value,
      Fivehundred: this.depositForm.get('Fivehundred').value,
      Twohundred: this.depositForm.get('Twohundred').value,
      Onehundred: this.depositForm.get('Onehundred').value,
    };

    this.totalCounts.push(totalCount);

    this.Twothousand = this.totalCounts[0].Twothousand;
    this.Fivehundred = this.totalCounts[0].Fivehundred;
    this.Twohundred = this.totalCounts[0].Twohundred;
    this.Onehundred = this.totalCounts[0].Onehundred;

    this.sum = this.totalCounts.reduce((accumulator, object) => {
      return (
        accumulator +
        object.Twothousand * 2000 +
        object.Fivehundred * 500 +
        object.Twohundred * 200 +
        object.Onehundred * 100
      );
    }, 0);

    this.totalAvailableBalance = this.sum;
    this.ifDepositAmount = true;
    const currentTime = new Date();
    this.showTime = currentTime;
    this.depositForm.reset();
  }

  submitWithdrawal() {
    let withdrawalAmount = this.withDrawForm.get('Withdrawamount').value;

    if (this.sum < withdrawalAmount) {
    } else {
      this.cannotWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
    }

    if (withdrawalAmount % 100 !== 0) {
      this.cannotWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
      return;
    }

    if (
      withdrawalAmount % 10000 !== 0 &&
      withdrawalAmount % 5000 !== 0 &&
      withdrawalAmount % 2000 !== 0 &&
      withdrawalAmount % 500 !== 0 &&
      withdrawalAmount % 400 !== 0 &&
      withdrawalAmount % 200 !== 0
    ) {
      this.cannotWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
      return;
    }

    const denominations = [
      { value: 2000, property: 'Twothousand' },
      { value: 500, property: 'Fivehundred' },
      { value: 200, property: 'Twohundred' },
      { value: 100, property: 'Onehundred' },
    ];

    const withdrawnDenominations = [];

    for (const denomination of denominations) {
      if (
        denomination.value <= withdrawalAmount &&
        this[denomination.property] > 0
      ) {
        const availableNotes = Math.min(
          Math.floor(withdrawalAmount / denomination.value),
          this[denomination.property]
        );

        withdrawnDenominations.push({
          value: denomination.value,
          count: availableNotes,
        });

        withdrawalAmount -= availableNotes * denomination.value;
        this[denomination.property] -= availableNotes;

        this.totalAvailableBalance -= availableNotes * denomination.value;
      }

      if (withdrawalAmount === 0) {
        this.successfullWithdraw = true;
        break;
      }
    }

    if (withdrawalAmount > 0) {
      this.cannotWithdraw = true;
      const currentTime = new Date();
      this.showTime = currentTime;
    } else {
      this.cannotWithdraw = false;
    }
  }
}
