import { Component, OnInit } from '@angular/core';
import { Author} from '../author0';
import { AUTHORS} from '../mock-authors';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})


export class AuthorsComponent implements OnInit {

  author : Author = {
    id: 123,
    name: "Amish"
  }
    authors : Author[];

  constructor(private authorService : AuthorService) {
   }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    // this.authors = this.authorService.getAuthors();
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }

}
