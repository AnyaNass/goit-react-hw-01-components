import { FriendCard, FriendAvatar, FriendName } from 'components/Friends/Friends.styled'

export const Friend = ({ avatar, name, status, id }) => {
	return <FriendCard key={id}>
		<span></span>
		<FriendAvatar src={avatar} alt={name} />
		<FriendName>{name}</FriendName>
	</FriendCard>
}