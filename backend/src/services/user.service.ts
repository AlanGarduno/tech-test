import { Request, Response } from "express";
import { GeneralResponse } from "../interfaces/response.interface";
import { PokemonModel } from "../models/pokemon.model";
import { UserModel } from "../models/user.model";
import { PokemonRepository } from "../repository/pokemon.repository";
import { UserRepository } from "../repository/user.repository";
import { CodeHttpStatus } from "../util/code.http.status";

export class UserSerivce {
  public async addRegistry(req: Request, res: Response) {
    if (req.body.nickName === " " || req.body.pokemons.length === 0) {
      const response: GeneralResponse = {
        status: CodeHttpStatus.BAD_REQUEST,
        data: null,
        succes: false,
        message: "Invalid data"
      };

      return res.status(CodeHttpStatus.BAD_REQUEST).json(response);
    }
    try {
      const user = new UserModel();
      user.name = req.body.nickName;
      const idUserCreated = await UserRepository.insetUser(user);
      await this.addPokemon(req.body.pokemons, idUserCreated[0]);
      const response: GeneralResponse = {
        status: CodeHttpStatus.CREATED,
        data: idUserCreated,
        succes: true,
        message: "Registros creados"
      };

      return res.status(CodeHttpStatus.OK).json(response);
    } catch (error) {
      const response: GeneralResponse = {
        status: CodeHttpStatus.BAD_REQUEST,
        data: error,
        succes: false,
        message: "User not created"
      };

      return res.status(CodeHttpStatus.BAD_REQUEST).json(response);
    }
  }

  public async addPokemon(pokemons: Array<number>, userId: number) {
    try {
      for (const pokemonNumber of pokemons) {
        const aux = new PokemonModel();
        aux.pokedexNumber = pokemonNumber;
        aux.userId = userId;
        await PokemonRepository.insertPokemon(aux);
      }
    } catch (errr) {
      console.log(errr);
    }
  }
}