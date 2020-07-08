import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../core/pokemon.service';
import { Pokemon, RegisterData } from '../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  data: Array<Pokemon> = [];
  pokemonToSave: Array<number> = [];
  displayedColumns: string[] = ['position', 'name', 'image', 'select', 'more'];
  dataSource: MatTableDataSource<Pokemon>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  nickName = '';
  constructor( private pokemonService: PokemonService,
               private dialog: MatDialog) { }

  async ngOnInit() {
    this.setData();
  }

  async getData(): Promise<Array<Pokemon>> {
    const data: Array<Pokemon> = [];
    for (let i = 0; i < 150; i++) {
      const aux  = await this.pokemonService.getPokemom(i + 1);
      data.push(aux);
    }

    return data;
  }

  async setData(): Promise<void> {
    this.data = await this.getData();
    this.data.forEach(item => {
      item.selected = false;
    });
    this.dataSource = new MatTableDataSource<Pokemon>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  onSelect(pokemon: Pokemon, isChecked: boolean): void {
    if (isChecked) {
      if (this.pokemonToSave.length < 6) {
        this.pokemonToSave.push(pokemon.id);
      }
    } else {
      const index = this.pokemonToSave.findIndex(n => n === pokemon.id);
      this.pokemonToSave.splice(index, 1);
    }
  }

  onMore(pokemon: Pokemon): void {
    this.dialog.open(PokemonDialogComponent, {
      data: pokemon,
      height: '30%',
      width: '30%',
    });
  }

  async onSend(): Promise<void> {
    if (this.nickName.trim().length === 0) {
      alert('Necesitas un Nicke name');
      return;
    }
    if (this.pokemonToSave.length < 6) {
      alert('Necesitas escojer 6 pokemones');
      return;
    }
    const registerData: RegisterData = {
      nickName: this.nickName,
      pokemons: this.pokemonToSave
    };
    const result = await this.pokemonService.postData(registerData);
    if (result.succes) {
      alert('Vivaaa datos registrados');
    } else {
      alert('Algo salio mal :c');
    }
  }


}
