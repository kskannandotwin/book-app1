import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookProcessService {

  constructor() { }

  processBookData(data: string): string {
    return data.toUpperCase();
  }
}
