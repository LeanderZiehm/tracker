import {
  type FastifyInstance,
  type FastifyRequest,
  type FastifyReply,
  type FastifySchema,
} from "fastify";
// import get_bookmarks from "../services/database.ts";
// import {get_bookmarks}  from "../services/database.js";
import {get_texts, insert_into_texts}  from "../services/database.js";


export default async function (app: FastifyInstance) {


  const schema: FastifySchema = {};
    // Params: MyParams;
    // <{ Params: MyParams }>
    // :limit
  app.get(
    "/getTexts/",
    { schema: schema },
    async (
      request: FastifyRequest,
      reply: FastifyReply
    ) => {
      // const { limit } = request.params;
      const results = await get_texts();
      return JSON.stringify(results);
      // return "book book book 2";
    }
  );


  interface MyParams {
    text: string; 
  }
    app.get(
    "/insertText/:text",
    { schema: schema },
    async (
      request: FastifyRequest<{Params:MyParams}>,
      reply: FastifyReply
    ) => {
      const { text } = request.params;
      const results = await insert_into_texts(text);
      return JSON.stringify(results);
    }
  );
}
