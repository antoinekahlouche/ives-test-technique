import * as z from "zod"
import type { Task } from "../../models/Task"
import { store } from "../../models/TaskStore"
import type { User } from "../../models/User"

const Body = z.object({
	description: z.string(),
})

export function createTask(reqBody: unknown, user: User): Task | undefined {
	const parseRes = Body.safeParse(reqBody)
	if (!parseRes.success) return
	const { description } = parseRes.data

	return store.create(description, user)
}
