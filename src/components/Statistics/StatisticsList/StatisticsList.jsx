import propTypes from 'prop-types'
import { ListElement, ListElementLable, ListElementPercentage } from 'components/Statistics/StatisticsList/StatisticsList.styled'
import { getRandomColor } from 'components/utils/getRandomColor'

export const StatisticsList = ({ id, label, percentage }) => {
	return <ListElement style={{
		backgroundColor: getRandomColor(),
	}
	} key={id} >
		<ListElementLable>{label}</ListElementLable>
		<ListElementPercentage>{percentage}%</ListElementPercentage>
	</ListElement >
}

StatisticsList.propTypes = {
	id: propTypes.string,
	label: propTypes.string.isRequired,
	percentage: propTypes.number.isRequired,
}