import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';
import {PostModel} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  post: PostModel;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

    this.postService.getPosts('http://localhost:8080/v1/posts')
      .subscribe(res => {
        this.post = res[0];
      });

    this.postService.postEventSource('http://localhost:8080/likes')
      .subscribe(res => {
        this.post = JSON.parse(res.data);
      });
  }
}
