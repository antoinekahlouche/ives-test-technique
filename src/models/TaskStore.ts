import { Task } from "./Task"
import type { User } from "./User"

export class TaskStore {
	private tasks: Map<string, Task> = new Map()

	create(description: string, user: User): Task {
		const task = new Task(description, user)
		this.tasks.set(task.id, task)
		return task
	}

	findById(id: string): Task | undefined {
		return this.tasks.get(id)
	}

	update(id: string, newDescription: string): Task | undefined {
		const task = this.tasks.get(id)
		if (!task) return undefined

		task.description = newDescription

		return task
	}

	delete(id: string): boolean {
		return this.tasks.delete(id)
	}
}

export const store = new TaskStore()
