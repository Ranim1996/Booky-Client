import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/Post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(postService: PostService,
    private route: ActivatedRoute,
    public dialog: MatDialog) 
    { }

  ngOnInit(): void {
  }

}
