export type DNDClass = {
	index: string;
	name: string;
	url: string;
};

export type DNDClassData = {
	name: string;
	proficiencies: {
		index: string;
		name: string;
	}[];
	starting_equipment: {
		equipment: {
			index: string;
			name: string;
		};
		quantity: number;
	}[];
	subclasses: {
		index: string;
		name: string;
	}[];
};

export type GetClassesResponseData = {
	count: number;
	results: {
		index: string;
		name: string;
		url: string;
	}[];
};
