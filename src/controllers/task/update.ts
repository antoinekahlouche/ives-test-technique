import * as z from "zod"
import type { Task } from "../../models/Task"
import { store } from "../../models/TaskStore"

const Params = z.object({
	id: z.string(),
})

const Body = z.object({
	description: z.string(),
})

export function updateTask(
	reqParams: unknown,
	reqBody: unknown
): Task | undefined {
	const paramsRes = Params.safeParse(reqParams)
	if (!paramsRes.success) return
	const bodyRes = Body.safeParse(reqBody)
	if (!bodyRes.success) return

	return store.update(paramsRes.data.id, bodyRes.data.description)
}
