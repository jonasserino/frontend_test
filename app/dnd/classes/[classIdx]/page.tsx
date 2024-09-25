import { DND_API_HOST } from "@/constants";
import type { DNDClassData } from "@/types/dnd";
import Link from "next/link";

type PageProps = {
	params: {
		classIdx: string;
	};
};

export default async function DNDClassPage({ params }: PageProps) {
	const response = await fetch(`${DND_API_HOST}/classes/${params.classIdx}`);
	const classData = (await response.json()) as DNDClassData;

	const proficiencies = classData.proficiencies;
	const startingEquipment = classData.starting_equipment;
	const subClasses = classData.subclasses;

	return (
		<>
			<nav>
				<Link href="/">Back to gallery</Link>
			</nav>
			<main>
				<h1>{classData.name}</h1>
				<section>
					<h2>Proficiencies</h2>
					<ul>
						{proficiencies.map((proficiency) => (
							<li key={`ClassProficiency-${proficiency.index}`}>
								{proficiency.name}
							</li>
						))}
					</ul>
				</section>
				<section>
					<h2>Starting Equipment</h2>
					<ul>
						{" "}
						{startingEquipment.map((startingEq) => (
							<li key={`StartingEquipment-${startingEq.equipment.index}`}>
								{startingEq.equipment.name} - {startingEq.quantity}
							</li>
						))}
					</ul>
				</section>
				<section>
					<h2>Sub-classes</h2>
					<ul>
						{" "}
						{subClasses.map((subClass) => (
							<li key={`SubClass-${subClass.index}`}>
								{subClass.name} - {subClass.name}
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}
