import { Injectable } from '@angular/core';
import { Vinyl } from '../interfaces/vinyl';
import { VINYL } from '../mocking/VINYL';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor() { }

  getAllVinyls(){
    return VINYL;
  }

  addVinyl(vinyl:Vinyl):any{
    VINYL.push(vinyl);
  }
}
