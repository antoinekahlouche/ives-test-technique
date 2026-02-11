import express from "express"
import { createTask } from "./controllers/task/create"
import { deleteTask } from "./controllers/task/delete"
import { getTask } from "./controllers/task/get"
import { updateTask } from "./controllers/task/update"
import { authenticate } from "./controllers/middleware/authenticate"
import { authorize } from "./controllers/oauth/authorize"
import { User } from "./models/User"

const app = express()
app.use(express.json())

const PORT = 3000

const defaultUser = new User("John Doe")

app.post("/v1/task", authenticate, (req, res) => {
	const task = createTask(req.body, defaultUser)
	if (!task) return res.status(400).send("Invalid request body")
	res.send(task.id)
})

app.get("/v1/task/:id", authenticate, (req, res) => {
	const task = getTask(req.params)
	if (!task) return res.status(404).send("Task not found")
	res.json(task)
})

app.patch("/v1/task/:id", authenticate, (req, res) => {
	const task = updateTask(req.params, req.body)
	if (!task) return res.status(404).send("Task not found")
	res.json(task)
})

app.delete("/v1/task/:id", authenticate, (req, res) => {
	const success = deleteTask(req.params)
	if (success === undefined) return res.status(404).send("Task not found")
	res.send(success)
})

app.get("/v1/authorize", (req, res) => {
	const result = authorize(req.query)
	if (!result)
		return res
			.status(400)
			.send(
				"Invalid request: client_id, redirect_uri, and response_type=code are required",
			)
	res.redirect(result.redirectUrl)
})

app.listen(PORT, () => {
	console.log(`ives-test-technique app listening on port ${PORT}`)
})
