import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    const allUser = this.listAllUsersUseCase.execute({ user_id });

    if (allUser === undefined) {
      return response.status(400).json({ error: "mensagem do erro" });
    }

    return response.json(allUser);
  }
}

export { ListAllUsersController };
