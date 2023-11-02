import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url = 'htttps://meubackend'

  constructor(
    private httpClient: HttpClient
  ) { }


  getCharacter(character: string): Observable<any>{
    return this.httpClient.get(this.url + "/" + character)
  }
}
