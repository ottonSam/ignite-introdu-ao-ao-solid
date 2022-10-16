import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    const user = this.createUserUseCase.execute({ name, email });

    if (user === undefined) {
      return response.status(400).json({ error: "mensagem do erro"});
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
