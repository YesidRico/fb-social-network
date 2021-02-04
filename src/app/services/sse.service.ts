import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor(private zone: NgZone) {}

  getServerSentEvent(url: string): Observable<any> {
    return new Observable(subscriber => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = event => {
        this.zone.run(() => {
          subscriber.next(event);
        });
      };

      eventSource.onerror = error => {
        this.zone.run(() => {
          subscriber.error(error);
        });
      };
    });
  }
}
