import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { apiRouter } from './router/index';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
const app = new Hono();

app.use(logger());

app.get('/api', (c) => {
  return c.text('Hello Hono!')
})


app.use('*', async (c, next) => {
  c.res.headers.set('Access-Control-Allow-Origin', '*');
  c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  await next();
});


app.route('/api', apiRouter);

(async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');

    app.get('/', (c) => c.json({ message: "backend EVoting by Syamsul Alam" }));

    serve({
      fetch: app.fetch,
      port: 3000,
    });
    console.log('Server is running at http://localhost:3000');
  } catch (err) {
    console.log('Database connection failed');
    console.log(err);
  }
})();
