import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})

export class AllAuthorsComponent implements OnInit {
  allAuthors: any = [];
  selectedauthor = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let observable = this._httpService.all();
    observable.subscribe((data: any) => {
      this.allAuthors = data.authors; 
      console.log("all authors:", this.allAuthors);
    });
  }

  editAuthor(authorId: string) {
    console.log("id:", authorId)

    this._router.navigate(['/edit/' + authorId]);
  }

  delete(author) {
    this._httpService.delete(author)
      .subscribe((data: any) => {

        for (let i = 0; i < this.allAuthors.length; i++) {
          if (this.allAuthors[i]._id === author) {
            return this.allAuthors.splice(i, 1);
          }
        }
      });
  }

}
