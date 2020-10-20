import { PostService } from './../services/Post/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-posts',
  templateUrl: './book-posts.component.html',
  styleUrls: ['./book-posts.component.css']
})
export class BookPostsComponent implements OnInit {

  constructor(postService: PostService,
    private route: ActivatedRoute,
    public dialog: MatDialog) 
    { }

  ngOnInit(): void {
  }

}
