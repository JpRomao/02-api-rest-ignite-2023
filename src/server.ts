import { app } from './app'
import { env } from './env'

const port = env.SERVER_PORT

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server is running on port ${port}`)
  })
