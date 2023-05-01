import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from '../../Redux/user/operations';
import { UserCard } from "components/UserCard/UserCard";
import { Container, CardsList, CardWrapper, Button } from './TweetsList.styled';
import { selectUsers } from "Redux/user/selectors";
import { load, save, remove } from "helpers/storage";


export const TweetsList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [page, setPage] = useState(null);
	const users = useSelector(selectUsers);
	const startPageUsers = [];
	for (let i = 0; i < 3; i += 1) {
		startPageUsers[i] = users[i];
	}
	let [currentUsers, setCurrentUsers] = useState(startPageUsers);

	useEffect(() => {
		dispatch(fetchUsers());
		const loadPage = load("page");
		const loadCurrentUser = load("currentUsers");

		if (loadPage) {
			setPage(loadPage);
		} else {
			setPage(2);
		}

		if (loadCurrentUser) {
			setCurrentUsers(loadCurrentUser);
		}


	}, [dispatch, page]);

	const changePage = () => {
		const paginationPageUsers = [];
		setPage(page + 1);
		for (let i = page * 3 - 3; i < page * 3; i += 1) {
			if (users.length > i) {
				paginationPageUsers.push(users[i]);
			};
		}
		currentUsers = setCurrentUsers([...currentUsers, ...paginationPageUsers]);
	};

	const BackHome = () => {
		navigate("/");
					remove("currentUsers");
			remove("page");
	}

	if (3 < currentUsers.length) {
		save("currentUsers", currentUsers);
	}

	if (2 < page) {
		save("page", page);
	}

	return (
		<Container>
			<Button type="button" onClick={BackHome}>Back Home Page</Button>
			<CardsList>
				{currentUsers.map(currentUser => (
					<CardWrapper key={currentUser.id} >
						<UserCard user={currentUser} />
					</CardWrapper>
				))}
			</CardsList>
			{users.length / 3 > page - 1 && <Button type="button" onClick={changePage}>Load more</Button>}
		</Container>

	)
}

