import { USER_API_HOST } from "@/constants";

export async function getUsers() {
	try {
		const response = await fetch(`${USER_API_HOST}/users`);

		if (response.ok) {
			const users = await response.json();
			return { data: users, error: null };
		} else {
			if (response.status === 404) throw new Error("404, Not found");
			if (response.status === 500)
				throw new Error("500, internal server error");

			throw Error(response.statusText);
		}
	} catch (e) {
		console.error(e);
		return {
			data: null,
			error: e,
		};
	}
}
