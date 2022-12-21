import { NextApiRequest, NextApiResponse } from "next";
import apiHandler from "../../../helpers/apiHandler";
import { createUser } from "../../../services/users";

export default apiHandler({
  post: async (request, response) => {
    try {
      const _ = await createUser(request.body);

      response.status(201).redirect("/login");
    } catch (error) {
      console.error(error);

      response.status(400).json({
        code: 400,
      });
    }
  },
});
