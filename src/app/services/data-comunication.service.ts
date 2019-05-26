import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataComunicationService {

  private messageSource = new BehaviorSubject<any>('')
  currentMessage= this.messageSource.asObservable()


  constructor() { }


  updateHeaderState(data){
    this.messageSource.next(data);
  }
}
