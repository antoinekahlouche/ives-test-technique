import express from "express"
import { createTask } from "./controllers/task/create"
import { User } from "./models/User"

const app = express()

const PORT = 3000

const defaultUser = new User("John Doe")

app.post("/v1/task", (req, res) => {
	const task = createTask(req.body, defaultUser)
	if (!task) return res.status(400).send("Invalid request body")
	res.send(task.id)
})

app.listen(PORT, () => {
	console.log(`ives-test-technique app listening on port ${PORT}`)
})
