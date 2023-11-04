import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
//Character/getCharacter?name=Iron%20Man
//https://localhost:44344/Character?Nome=Iron%20Man
export class CharacterService {
  private url = 'https://localhost:44344'

  constructor(
    private httpClient: HttpClient
  ) { }


  getCharacter(character: string): Observable<any>{
    return this.httpClient.get(this.url + "/Character?Nome=" + character)
  }
}
