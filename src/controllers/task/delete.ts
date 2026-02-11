import * as z from "zod"
import { store } from "../../models/TaskStore"

const Params = z.object({
	id: z.string(),
})

export function deleteTask(reqParams: unknown): boolean | undefined {
	const parseRes = Params.safeParse(reqParams)
	if (!parseRes.success) return
	const { id } = parseRes.data

	return store.delete(id)
}
