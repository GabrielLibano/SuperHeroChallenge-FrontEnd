import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  character: string = "";

  constructor(
    private characterService: CharacterService
  ){}

  ngOnInit() {
    console.log("foi")
  }

  searchCharacter(){
    console.log(this.character)

    this.characterService.getCharacter(this.character).pipe().subscribe(
      res=>{
        console.log(res)
      }, error=>{
        console.log(error)
      }
    )
  }
}
