import styles from "./page.module.css";

import Gallery from "./gallery";
import { getUsers } from "./lib/users";

export default async function Home() {
	const users = await getUsers();

	return (
		<main className={styles.main}>
			<Gallery users={users} />
		</main>
	);
}
