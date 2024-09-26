import styles from "./page.module.css";

import Gallery from "@/components/users/gallery";
import { getClasses } from "@/lib/dnd";
import DNDClassList from "@/components/dnd/class-list";
import { getUsers } from "@/lib/users";
import Link from "next/link";

export default async function Home() {
	const { data: users, error } = await getUsers();
	const classes = await getClasses();

	if (error) {
		return (
			<div>
				<p>Bad request</p>
				<p>Please refresh page to try again</p>
			</div>
		);
	}

	return (
		<main className={styles.main}>
			<DNDClassList dndClasses={classes.results} />
			<Gallery users={users} />
		</main>
	);
}
