"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import {
	FaRegCircleXmark,
	FaLocationDot,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa6";

import Modal from "./modal";

import { User } from "./types/user";

export type GalleryProps = {
	users: User[];
};
const Gallery = ({ users }: GalleryProps) => {
	const [usersList, setUsersList] = useState(users);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

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
			<h1 className="heading">Users</h1>
			<ul className="items ul-reset">
				{usersList.map((user, index) => (
					<li
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
					</li>
				))}
			</ul>
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
							<dl className="user-info info">
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
									<dt className="sr-only">Name - Username</dt>
									<dd>
										{selectedUser.name} ({selectedUser.username})
									</dd>
								</div>
								<div className="field">
									<dt className="sr-only">Address</dt>
									<FaLocationDot className="icon" />
									<dd className="value">
										{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}`}
									</dd>
								</div>
								<div className="field">
									<dt className="sr-only">Phone Number</dt>
									<FaPhone className="icon" />
									<dd className="value">{selectedUser.phone}</dd>
								</div>
								<div className="field">
									<dt className="sr-only">Email</dt>
									<FaEnvelope className="icon" />
									<dd className="value">{selectedUser.email}</dd>
								</div>
								<div className="company">
									<dt className="sr-only">Company Name</dt>
									<dd className="name">{selectedUser.company.name}</dd>
									<div className="catchphrase">
										{selectedUser.company.catchPhrase}
									</div>
								</div>
							</dl>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Gallery;
