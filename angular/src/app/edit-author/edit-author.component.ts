import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  
  editAuthor = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this._activeRoute.params
      .subscribe((params: Params) => {
        this._httpService.one(params.id)
          .subscribe((data: any) => {
            console.log("params id:", params.id)
            console.log("data:", data)
            this.editAuthor = data.author[0];
            console.log("this edit author:", this.editAuthor)
          });
      });
  }

  submitEdit() {
    this._httpService.edit(this.editAuthor._id, this.editAuthor)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/']);
        }
      });
  }

  cancel() {
    this._router.navigate(['/']);
  }

}
