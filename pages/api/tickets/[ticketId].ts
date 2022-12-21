import apiHandler from "../../../helpers/apiHandler";
import { prisma } from "../../../helpers/prisma";

export default apiHandler({
  patch: async (request, response) => {
    const body = JSON.parse(request.body);

    try {
      const _ = await prisma.ticket.update({
        where: {
          id: Number(request.query.ticketId),
        },
        data: { ...body, price: Number(body.price) },
      });

      response.status(200).redirect("/admin/tiket");
    } catch (error) {
      console.error(error);

      response.status(400).json({
        code: 400,
      });
    }
  },
  delete: async (request, response) => {
    try {
      const _ = await prisma.ticket.delete({
        where: {
          id: Number(request.query.ticketId),
        },
      });

      response.status(200).redirect("/admin/tiket");
    } catch (error) {
      console.error(error);

      response.status(400).json({
        code: 400,
      });
    }
  },
});
