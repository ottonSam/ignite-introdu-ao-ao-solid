import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    
    try {
      const allUser = this.listAllUsersUseCase.execute({ user_id });
      return response.json(allUser);
    } catch (err) {
      return response.status(400).json({ error: err });
    }

  }
}

export { ListAllUsersController };
