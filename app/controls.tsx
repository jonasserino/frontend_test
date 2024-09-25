import Select from "react-select";
import {
	SortDirection,
	SortDirectionOpt,
	SortField,
	SortFieldOpt,
} from "./types/sort";

type Props = {
	sortDirection: SortDirectionOpt | null;
	sortField: SortFieldOpt | null;
	onSortFieldChange: (sortFieldOpt: SortFieldOpt | null) => void;
	onSortDirectionChange: (sortDirectionOpt: SortDirectionOpt | null) => void;
};

const Controls = ({
	sortField,
	onSortFieldChange,

	sortDirection,
	onSortDirectionChange,
}: Props) => {
	const fieldOptions = [
		{ label: "Name", value: SortField.NAME },
		{ label: "Company", value: SortField.COMPANY },
		{ label: "Email", value: SortField.EMAIL },
	];

	const directionOptions = [
		{ label: "Ascending", value: SortDirection.ASC },
		{ label: "Descending", value: SortDirection.DESC },
	];

	return (
		<div className="gallery-controls controls">
			<div className="form-group group">
				<label htmlFor="sort-field" className="label">
					Sort Field
				</label>
				<Select
					value={sortField}
					onChange={(v) => onSortFieldChange(v)}
					options={fieldOptions}
					inputId="sort-field"
					className="input"
				/>
			</div>
			<div className="form-group group">
				<label htmlFor="sort-direction" className="label">
					Sort Direction
				</label>
				<Select
					value={sortDirection}
					onChange={(v) => onSortDirectionChange(v)}
					options={directionOptions}
					inputId="sort-direction"
					className="input"
				/>
			</div>
		</div>
	);
};

export default Controls;
