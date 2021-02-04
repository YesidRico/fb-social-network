import {Injectable} from '@angular/core';
import {SseService} from './sse.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private sseService: SseService,
    private http: HttpClient
  ) {
  }

  getPosts(url: string): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(url);
  }

  postEventSource(url: string): Observable<any> {
    return this.sseService.getServerSentEvent(url);
  }
}
