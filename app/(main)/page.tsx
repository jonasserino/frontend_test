import styles from "./page.module.css";

import Gallery from "@/components/users/gallery";
import { getClasses } from "@/lib/dnd";
import DNDClassList from "@/components/dnd/class-list";
import { getUsers } from "@/lib/users";

export default async function Home() {
	const users = await getUsers();
	const classes = await getClasses();

	return (
		<main className={styles.main}>
			<DNDClassList dndClasses={classes.results} />
			<Gallery users={users} />
		</main>
	);
}
