import type { Request, Response, NextFunction } from "express"

export function authenticate(req: Request, res: Response, next: NextFunction) {
	const isAuthenticated = true

	if (!isAuthenticated) {
		res.status(401).send("Unauthorized")
		return
	}

	next()
}
