import propTypes from 'prop-types'
import { StatisticsWrapper } from '../StatisticsContainer/StatisticsContainer.styled'

export const StatisticsContainer = ({ children }) => {
	return <StatisticsWrapper>{children}</StatisticsWrapper>
}

StatisticsContainer.propTypes = {
	children: propTypes.array.isRequired,
}