import { PokemonModel } from "../models/pokemon.model";
import { ConnectionFactory } from "./connection.factory";

export class PokemonRepository extends ConnectionFactory {

  public static async insertPokemon(pokemon: PokemonModel) {
    return await this.knex("pokemon").insert({
      user_id: pokemon.userId,
      pokedex_number: pokemon.pokedexNumber
    });
  }
}