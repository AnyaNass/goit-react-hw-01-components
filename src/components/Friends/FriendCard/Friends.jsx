import propTypes from 'prop-types'
import { FriendCard, FriendAvatar, FriendName, Chip } from 'components/Friends/FriendCard/Friends.styled'

export const Friend = ({ avatar, name, status, id }) => {
	return <FriendCard key={id}>
		<Chip status={status}></Chip>
		<FriendAvatar src={avatar} alt={name} />
		<FriendName>{name}</FriendName>
	</FriendCard>
}

Friend.propTypes = {
	avatar: propTypes.string,
	name: propTypes.string,
	id: propTypes.number,
	status: propTypes.bool,
}