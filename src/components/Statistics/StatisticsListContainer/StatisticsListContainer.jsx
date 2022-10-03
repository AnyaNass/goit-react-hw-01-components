import propTypes from 'prop-types'
import { StatListWrapper } from './StatisticsListContainer.styled'

export const StatisticsListContainer = ({ children }) => {
	return <StatListWrapper>{children}</StatListWrapper>
}

StatisticsListContainer.propTypes = {
	children: propTypes.array.isRequired,
}