
export class PokemonModel {
  private _id: number;
  private _pokedexNumber: number;
  private _userId: number;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get pokedexNumber(): number {
    return this._pokedexNumber;
  }
  public set pokedexNumber(value: number) {
    this._pokedexNumber = value;
  }

  public get userId(): number {
    return this._userId;
  }
  public set userId(value: number) {
    this._userId = value;
  }
}