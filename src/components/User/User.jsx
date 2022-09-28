import user from '../../user'

export const UserInfo = ({ username, avatar, tag, location }) => {
	return <div>
		<img src={user.avatar} alt={user.username} />
		<p>{user.username}</p>
		<p>@{user.tag}</p>
		<p>{user.location}</p>
	</div>
}