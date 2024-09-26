import { DND_API_HOST } from "@/constants";
import type { DNDClassData, GetClassesResponseData } from "@/types/dnd";

export async function getClasses() {
	const res = await fetch(`${DND_API_HOST}/classes`);
	const data = (await res.json()) as GetClassesResponseData;

	return data;
}

export async function getClass(index: string) {
	try {
		const response = await fetch(`${DND_API_HOST}/classes/${index}`);

		if (response.ok) {
			const classData = (await response.json()) as DNDClassData;
			return { data: classData, error: null };
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
