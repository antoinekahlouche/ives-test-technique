import * as z from "zod"
import type { Task } from "../../models/Task"
import { store } from "../../models/TaskStore"

const Params = z.object({
	id: z.string(),
})

export function getTask(reqParams: unknown): Task | undefined {
	const parseRes = Params.safeParse(reqParams)
	if (!parseRes.success) return
	const { id } = parseRes.data

	return store.findById(id)
}
