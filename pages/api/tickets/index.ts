import apiHandler from "../../../helpers/apiHandler";
import { prisma } from "../../../helpers/prisma";

export default apiHandler({
  post: async (request, response) => {
    try {
      const _ = await prisma.ticket.create({
        data: { ...request.body, price: Number(request.body.price) },
      });

      response.status(201).redirect("/admin/tiket");
    } catch (error) {
      console.error(error);

      response.status(400).json({
        code: 400,
      });
    }
  },
  
});
