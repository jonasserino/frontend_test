import { USER_API_HOST } from "@/constants";

export async function getUsers() {
	const response = await fetch(`${USER_API_HOST}/users`);
	const users = await response.json();

	return users;
}
