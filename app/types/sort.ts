export enum SortDirection {
	ASC = "ascending",
	DESC = "descending",
}

export enum SortField {
	NAME = "name",
	COMPANY = "company",
	EMAIL = "email",
}

export type SortFieldOpt = {
	label: string;
	value: SortField;
};

export type SortDirectionOpt = {
    label: string;
    value: SortDirection
}
