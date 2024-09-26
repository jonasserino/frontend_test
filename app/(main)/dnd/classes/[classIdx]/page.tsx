import { DND_API_HOST } from "@/constants";
import { getClass } from "@/lib/dnd";
import type { DNDClassData } from "@/types/dnd";
import Link from "next/link";

type PageProps = {
	params: {
		classIdx: string;
	};
};

export default async function DNDClassPage({ params }: PageProps) {
	const { data, error } = await getClass(params.classIdx);

	if (error) {
		return (
			<div>
				<p>Bad request</p>
				<p>Please refresh page to try again</p>
				<Link href="/">Back to gallery</Link>
			</div>
		);
	}

	const className = data?.name;
	const proficiencies = data?.proficiencies || [];
	const startingEquipment = data?.starting_equipment || [];
	const subClasses = data?.subclasses || [];

	return (
		<>
			<nav>
				<Link href="/">Back to gallery</Link>
			</nav>
			<main>
				<h1>{className}</h1>
				<div className="class-details">
					{proficiencies && proficiencies.length > 0 && (
						<section className="section">
							<h2 className="heading">Proficiencies</h2>
							<ul>
								{proficiencies.map((proficiency) => (
									<li key={`ClassProficiency-${proficiency.index}`}>
										{proficiency.name}
									</li>
								))}
							</ul>
						</section>
					)}
					{startingEquipment && startingEquipment.length > 0 && (
						<section className="section">
							<h2 className="heading">Starting Equipment</h2>
							<ul>
								{" "}
								{startingEquipment?.map((startingEq) => (
									<li key={`StartingEquipment-${startingEq.equipment.index}`}>
										{startingEq.equipment.name} - {startingEq.quantity}
									</li>
								))}
							</ul>
						</section>
					)}
					{subClasses && subClasses.length > 0 && (
						<section className="section">
							<h2 className="heading">Sub-classes</h2>
							<ul>
								{" "}
								{subClasses?.map((subClass) => (
									<li key={`SubClass-${subClass.index}`}>
										{subClass.name} - {subClass.name}
									</li>
								))}
							</ul>
						</section>
					)}
				</div>
			</main>
		</>
	);
}
