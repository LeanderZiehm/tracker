import {
  type FastifyInstance,
  type FastifyRequest,
  type FastifyReply,
  type FastifySchema,
} from "fastify";

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

interface TextBody {
  text: string;
}

const bodyJsonSchemaForText = {
  type: 'object',
  required: ['text'],
  properties: {
    text: { type: 'string' },
  },
};

const postSchema: FastifySchema = {
  body: bodyJsonSchemaForText,
};

app.post<{ Body: TextBody }>(
  '/insertText',
  { schema: postSchema },
  async (request, reply) => {
    const { text } = request.body;
    const results = await insert_into_texts(text);
    return results; // Fastify automatically serializes to JSON
  }
);

  // const bodyJsonSchemaForText = {
  //   type: 'object',
  //   required: ['text'],
  //   properties: {
  //     text: { type: 'string' },
  //   },
  // }

  // const post_schema = {
  //   body: bodyJsonSchemaForText,
  // }

  // app.post('/insertText', { bodyJsonSchemaForText }, async (request, reply) => {
  //   // we can use the `request.body` object to get the data sent by the client
  //   const text = request.body.text;
  //      const results = await insert_into_texts(text);
  //     return JSON.stringify(results);
  // });
}
