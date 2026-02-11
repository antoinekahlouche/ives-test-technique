import jwt from "jsonwebtoken"
import * as z from "zod"

const JWT_SECRET = "super-secret-key"

const Query = z.object({
	client_id: z.string(),
	redirect_uri: z.string().url(),
	response_type: z.literal("code"),
})

export function authorize(query: unknown): { redirectUrl: string } | undefined {
	const parseRes = Query.safeParse(query)
	if (!parseRes.success) return undefined

	const { client_id, redirect_uri } = parseRes.data

	const authorizationCode = jwt.sign({ client_id }, JWT_SECRET, {
		expiresIn: "5m",
	})

	const redirectUrl = `${redirect_uri}?code=${authorizationCode}`
	return { redirectUrl }
}
