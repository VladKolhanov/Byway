import 'dotenv/config'
import express from 'express'
import path from 'path'
import router from './routes/root'

const PORT = process.env.PORT || 3300
const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', router)

app.all('*', (req, res) => {
	res.status(404)
	
	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'views', '404.html'))
	} else if (req.accepts('json')) {
		res.json({ message: '404 Not Found' })
	} else {
		res.type('txt').send('404 Not Found')
	}
})

app.listen(PORT, () => {
	console.log(`server was started on port ${PORT}`)
})