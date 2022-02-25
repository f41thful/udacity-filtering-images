export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgrestest",
    "database": "database1",
    "host": "database-1.c24kndrsoz0w.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "user179-test-bucket"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "secret"
  }
}
