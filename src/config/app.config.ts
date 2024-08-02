import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  listeningPort: process.env.API_PORT,
  listeningIp: process.env.API_HOST,
  isProd: !!process.env.IS_PROD,
  requestLimit: process.env.REQUEST_LIMIT,
  projectOrigin: process.env.PROJECT_ORIGIN,
  projectOriginWWW: process.env.PROJECT_ORIGIN_WWW,
}));
