import dotenv from "dotenv";
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import path from 'path';
import { fileURLToPath } from "url";

import autoload from '@fastify/autoload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`filename ${__filename}`);
console.log(`filename ${__dirname}`);


dotenv.config();
const app = fastify.fastify({ logger: true });



const swaggerOptions = {
    swagger: {
        info: {
            title: "My Title",
            description: "My Description.",
            version: "1.0.0",
        },

    },
};

const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};


// const a:fastifySwaggerUi.FastifySwaggerUILogo =  {
//     type: string;
//     content: string | Buffer;
//     href?: string;
//     target?: '_blank' | '_parent' | '_self' | '_top';
//   }; 

//     logo: {
//     type: 'image/png',
//     content: Buffer.from('iVBOR...', 'base64'),
//     href: '/documentation',
//     target: '_blank'
//   },
// const swaggerUiOptions:fastify.FastifyRegisterOptions<fastifySwaggerUi.FastifySwaggerUiOptions> = {
//     logo: {},
//     routePrefix: "/docs",
//     exposeRoute: true,
// };


app.register(fastifySwagger,swaggerOptions);
app.register(fastifySwaggerUi,swaggerUiOptions);

// a:fastify.F

// app.register(autoload, {
//   dir: __dirname,//path.join(__dirname, 'plugins')
//   forceESM:true
// });
app.register(autoload, {
  dir: path.join(__dirname,"routes"),//path.join(__dirname, 'plugins')
  forceESM:true
})



app.get('/', async () => {
  return { message: 'hello world :)' }
})
app.listen({ port: 3000 })
  .then(() => console.log('Server running on :3000'))
  .catch(err => {
    console.error(err)
    process.exit(1)
  });
