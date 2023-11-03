import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/characterService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  character: string = "";
  dataCharacter: any;
  showDetails: boolean = false;
  isLoading: boolean = false;
  constructor(
    private characterService: CharacterService,
    private toast: ToastrService,
  ){}

  ngOnInit() {
  }


  async searchCharacter(){
    if(this.character === ""){
      this.toast.warning("Informe um Super Heroi!")
    }else{
      this.isLoading = true;
      await this.characterService.getCharacter(this.character).pipe().subscribe(
        res=>{
          this.isLoading = false;
          if(res.success){
            this.dataCharacter = res.result;
            this.showDetails = true;
          }else{
            this.toast.error("Tente outro Super Heroi.", "Super Heroi não encontrado!")
          }
        }, error=>{
          this.isLoading = false;
          this.toast.error("Tente novamente mais tarde","Falha no serviço.")
        }
      )
    }

  }
}
