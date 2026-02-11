import { randomUUID } from "node:crypto"
import type { User } from "./User"

export class Task {
	id: string
	description: string
	user: User

	constructor(description: string, user: User) {
		this.id = randomUUID()
		this.description = description
		this.user = user
	}
}
