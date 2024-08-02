export interface AWSConfig {
  accessKeyId: string;
  secretKeyId: string;
  region: string;
  s3InputBucket: string;
  awsLogGroup: string;
}

export interface AppConfig {
  listeningPort: string;
  listeningIp: string;
  isProd: boolean;
  requestLimit: string;
  projectOrigin: string;
  projectOriginWWW: string;
}
