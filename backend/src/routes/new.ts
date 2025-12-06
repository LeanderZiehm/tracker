import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from "fastify";

export default async function (app: FastifyInstance) {
  app.get("/new", { schema: { } }, async (request, reply) => {
    return "new";
  });

  app.get("/nice", { schema: { } }, async (request:FastifyRequest, reply:FastifyReply) => {
    return "nice";
  });

  interface Params {
    inputText: string;
  }

  app.get<{
    Params: Params;
  }>(
    "/input/:inputText",
    {
      schema: {
        summary: "Echo input",
        description:
          "Takes a path parameter and returns it inside a greeting message.",
        params: {
          type: "object",
          properties: {
            inputText: {
              type: "string",
              description: "Text that will be echoed back.",
            },
          },
          required: ["inputText"],
        },
        response: {
          200: {
            type: "string",
            example: "hello: world",
          },
        },
      },
    },
    async (request, reply) => {
      const { inputText } = request.params;
      return `hello: ${inputText}`;
    }
  );
}
