import Link from "next/link";
import type { DNDClass } from "../types/dnd";

type Props = {
	dndClasses: DNDClass[];
};

export default function DNDClassList({ dndClasses }: Props) {
	return (
		<section className="section">
			<h2>DND Classes</h2>
			<ul className="dnd-classlist">
				{dndClasses?.map((dndClass) => (
					<li className="item" key={`DNDClass-${dndClass.index}`}>
						<Link className="link" href={`/dnd/classes/${dndClass.index}`}>
							{dndClass.name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
