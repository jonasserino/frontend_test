import { DND_API_HOST } from "@/constants";
import type { GetClassesResponseData } from "@/types/dnd";

export async function getClasses() {
	const res = await fetch(`${DND_API_HOST}/classes`);
	const data = (await res.json()) as GetClassesResponseData;

	return data;
}
