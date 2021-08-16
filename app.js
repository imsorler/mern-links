const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const auth_route = require('./routes/auth.routes')
const link_route = require('./routes/link.routes')
const redirect_route = require('./routes/redirect.routes')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))

app.use('/api/auth', auth_route)
app.use('/api/link', link_route)
app.use('/t', redirect_route)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

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