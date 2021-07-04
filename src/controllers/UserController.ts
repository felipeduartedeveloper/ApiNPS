import { error } from 'console';
import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { User } from "../models/User";


class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    
    const usersRepository = getRepository(User);

    // Tratando usuário cadastro duplicado com base no email
    const userAlreadyExist = await usersRepository.findOne({
       email 
      });

      // Verificando se um usuário existe
    if (userAlreadyExist) {
      // Passando status de erro 400 para usuário duplicado
      return response.status(400).json({ 
        error: "Usuário já existe"});
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user);

    return response.json(user);
  }
}
export { UserController }
