import user from '../../user'

export const UserStats = ({ stats }) => {
	return <ul>
		<li>
			<span >Followers</span>
			<span>{user.stats.followers}</span>
		</li>
		<li>
			<span>Views</span>
			<span>{user.stats.views}</span>
		</li>
		<li>
			<span >Likes</span>
			<span>{user.stats.likes}</span>
		</li>
	</ul>
}