import propTypes from 'prop-types'
import user from '../../user'
import defaultImg from '../def-img.jpg'
import { Decription, Avatar, UserName, Tag, Location } from './User.styled'

export const UserInfo = ({ username, avatar = defaultImg, tag, location }) => {
	return <Decription>
		<Avatar src={user.avatar} alt={user.username} />
		<UserName>{user.username}</UserName>
		<Tag>@{user.tag}</Tag>
		<Location>{user.location}</Location>
	</Decription>
}

UserInfo.propTypes = {
	username: propTypes.string,
	avatar: propTypes.string,
	tag: propTypes.string.isRequired,
	location: propTypes.string.isRequired,
}