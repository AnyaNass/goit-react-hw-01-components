import propTypes from 'prop-types'
import { StatsTitle } from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title }) => {
	return <StatsTitle>{title}</StatsTitle>
}

Statistics.propTypes = {
	title: propTypes.string,
}


