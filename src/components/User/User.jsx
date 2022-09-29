import propTypes from 'prop-types'
import defaultImg from '../def-img.jpg'
import { Description, Avatar, UserName, Tag, Location } from './User.styled'

export const UserInfo = ({ username, avatar = defaultImg, tag, location }) => {
	return <Description>
		<Avatar src={avatar} alt={username} />
		<UserName>{username}</UserName>
		<Tag>@{tag}</Tag>
		<Location>{location}</Location>
	</Description>
}

UserInfo.propTypes = {
	username: propTypes.string,
	avatar: propTypes.string,
	tag: propTypes.string,
	location: propTypes.string,
}