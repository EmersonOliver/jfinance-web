import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadServiceService {
  private reloadSource = new Subject<void>();
  reload$ = this.reloadSource.asObservable();
  constructor() { }
  triggerReload() {
    this.reloadSource.next();
  }
}
