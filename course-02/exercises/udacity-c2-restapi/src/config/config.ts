export const config = {
  "dev": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "user179-test-bucket"
  },
  "jwt": {
    "secret": "secret"
  }
}
