import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts$ = this.postService.getPosts('http://localhost:8080/v1/posts');

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {}
}
