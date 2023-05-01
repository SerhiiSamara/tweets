import { Logo, CardImg, CardLine, AvatarWrapper, EllipsFrame, Avatar, UserName, Tweets, Followers, FollowBtn } from './UserCard.styled';
import {logoImg, cardImg, lineImg, ellipseIcon} from '../../images'
import { useEffect,  useState } from 'react';
import { load, save } from 'helpers/storage';

export const UserCard = ({ user }) => { 
	const [isFollowing, setIsFollowing] = useState(false);
	let followers = user.followers;

	useEffect(() => {
		const userState = load(`${user.id}`);
		if (userState) {
			setIsFollowing(true);
		}
	}, [user.id])

	useEffect(() => {
			save(`${user.id}`, isFollowing);
	}, [isFollowing, user.id])
	
	const handleClickBtn = () => {
		setIsFollowing((isFollowing) => !isFollowing);
	}

	if (isFollowing) {
		followers = followers + 1;
	}

	return (
		<>
			<Logo src={logoImg} />
			<CardImg src={cardImg} />
			<CardLine src={lineImg} />
			<AvatarWrapper>
				<EllipsFrame src={ellipseIcon} />
				<Avatar src={user.avatar} />
			</AvatarWrapper>
			<UserName>{user.user}</UserName>
			<Tweets>{(user.tweets*1000).toLocaleString("en-US")} Tweets</Tweets>
			<Followers>{followers} Followers</Followers>
			<FollowBtn bgcolor={isFollowing ? "rgb(92, 211, 168)" : "rgb(235, 216, 255)" } onClick={handleClickBtn}>Following</FollowBtn>
		</>
	)
}