const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const auth_route = require('./routes/auth.routes')
const link_route = require('./routes/link.routes')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', auth_route)
app.use('/api/link', link_route)

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => {console.log(`app has been started...${PORT}`)})
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()