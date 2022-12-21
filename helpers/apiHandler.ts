import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const apiHandler =
  (handlers: {
    get?: NextApiHandler;
    post?: NextApiHandler;
    put?: NextApiHandler;
    patch?: NextApiHandler;
    delete?: NextApiHandler;
    defaultHandler?: NextApiHandler;
  }) =>
  (request: NextApiRequest, response: NextApiResponse) => {
    const method = request.method;

    switch (method) {
      case "GET":
        if (handlers.get) handlers.get(request, response);
        break;

      case "POST":
        if (handlers.post) handlers.post(request, response);
        break;

      case "PUT":
        if (handlers.put) handlers.put(request, response);
        break;

      case "PATCH":
        if (handlers.patch) handlers.patch(request, response);
        break;

      case "DELETE":
        if (handlers.delete) handlers.delete(request, response);
        break;

      default:
        if (handlers.defaultHandler) handlers.defaultHandler(request, response);
        break;
    }
  };

export default apiHandler;
