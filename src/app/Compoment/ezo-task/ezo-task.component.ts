import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ezo-task',
  templateUrl: './ezo-task.component.html',
  styleUrls: ['./ezo-task.component.css'],
})
export class EzoTaskComponent implements OnInit {
  imgData: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'https://db.ezobooks.in/kappa/image/task';
    this.http.get(url).subscribe((res) => {
      this.imgData = (res as any).items;
      console.log('res', this.imgData);
    });
  }
}
