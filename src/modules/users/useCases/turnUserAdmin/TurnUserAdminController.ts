import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    const user = this.turnUserAdminUseCase.execute({ user_id });

    if (user === undefined) {
      return response.status(404).json({ error: "mensagem do erro" });
    }

    return response.status(201).json(user);
  }
}

export { TurnUserAdminController };
