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
      const results = await get_texts(true,5);
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

// curl 'https://api.tracker.leanderziehm.com/insertText' \
//   -H 'accept: */*' \
//   -H 'accept-language: en-US,en;q=0.9,es-US;q=0.8,es;q=0.7' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: http://localhost:5173' \
//   -H 'priority: u=1, i' \
//   -H 'referer: http://localhost:5173/' \
//   -H 'sec-ch-ua: "Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36' \
//   --data-raw '{"text":"test"}'

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
