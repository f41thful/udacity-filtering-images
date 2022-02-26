export const config = {
  "dev": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.PROFILE,
    "aws_media_bucket": process.env.BUCKET
  },
  "jwt": {
    "secret": "secret"
  }
}

console.log("Using username: " + config.dev.username)
console.log("Using host: " + config.dev.host)
console.log("Using database: " + config.dev.database)
console.log("Using region: " + config.dev.aws_region)
console.log("Using profile: " + config.dev.aws_profile)
console.log("Using bucket: " + config.dev.aws_media_bucket)