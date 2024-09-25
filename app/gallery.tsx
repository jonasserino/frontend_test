"use client";

import { useEffect, useMemo, useState } from "react";
import Avatar from "boring-avatars";
import {
	FaRegCircleXmark,
	FaLocationDot,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa6";

import Controls from "./controls";
import Modal from "./modal";

import { User } from "./types/user";
import {
	SortField,
	SortDirection,
	SortFieldOpt,
	SortDirectionOpt,
} from "./types/sort";

export type GalleryProps = {
	users: User[];
};

function sortUserList(
	userList: User[],
	sortField?: SortField | null,
	sortDirection?: SortDirection | null,
) {
	const userListCpy = [...userList];
	const sortedUserList = userListCpy.sort((userA, userB) => {
		let comparison = 0;

		if (sortField) {
			const compA =
				sortField === SortField.COMPANY ? userA.company.name : userA[sortField];
			const compB =
				sortField === SortField.COMPANY ? userB.company.name : userB[sortField];

			if (compA > compB) {
				comparison = 1;
			} else if (compA < compB) {
				comparison = -1;
			}
		}

		return sortDirection === SortDirection.DESC ? comparison * -1 : comparison;
	});

	return sortedUserList;
}

const Gallery = ({ users }: GalleryProps) => {
	const [sortField, setSortField] = useState<SortFieldOpt | null>(null);
	const [sortDirection, setSortDirection] = useState<SortDirectionOpt | null>(
		null,
	);

	const [usersList, setUsersList] = useState(users);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const sortedUserList = useMemo(
		() => sortUserList(usersList, sortField?.value, sortDirection?.value),
		[usersList, sortField, sortDirection],
	);

	const handleModalOpen = (id: number) => {
		const user = usersList.find((item) => item.id === id) || null;

		if (user) {
			setSelectedUser(user);
			setIsModalOpen(true);
		}
	};

	const handleModalClose = () => {
		setSelectedUser(null);
		setIsModalOpen(false);
	};

	return (
		<div className="user-gallery">
			<div className="heading">
				<h1 className="title">Users</h1>
				<Controls
					sortField={sortField}
					onSortFieldChange={setSortField}
					sortDirection={sortDirection}
					onSortDirectionChange={setSortDirection}
				/>
			</div>
			<div className="items">
				{sortedUserList.map((user, index) => (
					<div
						className="item user-card"
						key={index}
						onClick={() => handleModalOpen(user.id)}
					>
						<div className="body">
							<Avatar
								size={96}
								name={user.name}
								variant="marble"
								colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
							/>
						</div>
						<div className="info">
							<div className="name">{user.name}</div>
							<div className="company">{user.company.name}</div>
						</div>
					</div>
				))}
				<Modal isOpen={isModalOpen} onClose={handleModalClose}>
					<div className="user-panel">
						<div className="header">
							<div
								role="button"
								tabIndex={0}
								className="close"
								onClick={handleModalClose}
							>
								<FaRegCircleXmark size={32} />
							</div>
						</div>
						<div className="body">
							{selectedUser && (
								<div className="user-info info">
									<div className="avatar">
										<Avatar
											size={240}
											name={selectedUser.name}
											variant="marble"
											colors={[
												"#92A1C6",
												"#146A7C",
												"#F0AB3D",
												"#C271B4",
												"#C20D90",
											]}
										/>
									</div>
									<div className="name">
										{selectedUser.name} ({selectedUser.username})
									</div>
									<div className="field">
										<FaLocationDot className="icon" />
										<div className="data">{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}`}</div>
									</div>
									<div className="field">
										<FaPhone className="icon" />
										<div className="value">{selectedUser.phone}</div>
									</div>
									<div className="fields">
										<FaEnvelope className="icon" />
										<div className="value">{selectedUser.email}</div>
									</div>
									<div className="company">
										<div className="name">{selectedUser.company.name}</div>
										<div className="catchphrase">
											{selectedUser.company.catchPhrase}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default Gallery;
