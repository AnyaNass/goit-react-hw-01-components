import propTypes from 'prop-types'
import { StatsList, StatsListItem, StatsItemLable, StatsItemQuantity } from 'components/User/UserStats/UserStats.styled'

export const UserStats = ({ user }) => {
	return <StatsList>
		<StatsListItem>
			<StatsItemLable >Followers</StatsItemLable>
			<StatsItemQuantity>{user.stats.followers}</StatsItemQuantity>
		</StatsListItem>
		<StatsListItem>
			<StatsItemLable>Views</StatsItemLable>
			<StatsItemQuantity>{user.stats.views}</StatsItemQuantity>
		</StatsListItem>
		<StatsListItem>
			<StatsItemLable >Likes</StatsItemLable>
			<StatsItemQuantity>{user.stats.likes}</StatsItemQuantity>
		</StatsListItem>
	</StatsList>
}

UserStats.propTypes = {
	stats: propTypes.shape({
		followers: propTypes.number.isRequired,
		views: propTypes.number.isRequired,
		likes: propTypes.number.isRequired,
	})
}