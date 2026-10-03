import app from './app.js';
import { env } from './config/env.js';

const server = app.listen(env.port, () => {
  console.log(`API listening on http://localhost:${env.port}`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close((error) => {
      if (error) {
        console.error('API shutdown failed:', error);
        process.exitCode = 1;
      }
    });
  });
}