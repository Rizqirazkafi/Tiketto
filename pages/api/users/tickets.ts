import apiHandler from "../../../helpers/apiHandler";
import { prisma } from "../../../helpers/prisma";
import { unstable_getServerSession } from "next-auth";

export default apiHandler({
  patch: async (request, response) => {
    const body = JSON.parse(request.body);

    try {
      const session = await unstable_getServerSession(request, response, {});

      if (!session?.user?.email) throw new Error();

      const _ = await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          purchasedTickets: {
            connect: {
              id: body.id,
            },
          },
        },
      });

      response.status(201).redirect("/purchased");
    } catch (error) {
      response.status(400).send({
        code: 400,
      });
    }
  },
});
