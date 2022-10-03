import propTypes from 'prop-types'
import { StatsTitle } from 'components/Statistics/StatisticsHeader/StatisticsHeader.styled'

export const StatisticsHeader = ({ title }) => {
	return <StatsTitle>{title}</StatsTitle>
}

StatisticsHeader.propTypes = {
	title: propTypes.string.isRequired,
}


