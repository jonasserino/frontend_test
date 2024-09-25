import styles from "./page.module.css";

import Gallery from "./gallery";
import { getClasses } from "./lib/dnd";
import DNDClassList from "./dnd-classlist";
import { getUsers } from "./lib/users";

export default async function Home() {
	const users = await getUsers();
	const classes = await getClasses();

	return (
		<main className={styles.main}>
			<Gallery users={users} />
			<DNDClassList dndClasses={classes.results} />
		</main>
	);
}
