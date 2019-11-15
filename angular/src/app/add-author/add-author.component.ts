import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  newAuthor = { name: "", quote: "" };
  errorMsg: string[] = [];

  constructor(
    private _httpService: HttpService, 
    private _router: Router,
    ) { }

  ngOnInit() {
  }

  submitAdd() {
    this._httpService.add(this.newAuthor)
      .subscribe((data: any) => {
        console.log("Successfully added new author!", data);
        this.newAuthor = { name: "", quote: "" };
        if (data.hasOwnProperty('errors')) {
          this.errorMsg = data.errors.message;
        } else {
          this._router.navigate(['/']);
        }
      })
  }

  cancel() {
    this._router.navigate(['/']);
  }
}
