import propTypes from 'prop-types'
import user from '../../user'
import { StatsList, StatsListItem, StatsItemLable, StatsItemQuantity } from 'components/UserStats/UserStats.styled'

export const UserStats = ({ stats }) => {
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