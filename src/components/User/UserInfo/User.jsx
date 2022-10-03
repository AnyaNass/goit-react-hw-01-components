import propTypes from 'prop-types'
import { Description, Avatar, UserName, Tag, Location } from './User.styled'

export const UserInfo = ({ username, avatar, tag, location }) => {
	return <Description>
		<Avatar src={avatar} alt={username} />
		<UserName>{username}</UserName>
		<Tag>@{tag}</Tag>
		<Location>{location}</Location>
	</Description>
}

UserInfo.propTypes = {
	username: propTypes.string.isRequired,
	avatar: propTypes.string.isRequired,
	tag: propTypes.string.isRequired,
	location: propTypes.string.isRequired,
}