import propTypes from 'prop-types'
import { ColumnTitle } from 'components/Transactions/TransactionTableHead/TransactionTableHead.styled'

export const TransactionTableHead = ({ type, amount, currency }) => {
	return <thead>
		<tr>
			<ColumnTitle>{type}</ColumnTitle>
			<ColumnTitle>{amount}</ColumnTitle>
			<ColumnTitle>{currency}</ColumnTitle>
		</tr>
	</thead>
}

TransactionTableHead.propTypes = {
	type: propTypes.string,
	amount: propTypes.string,
	currency: propTypes.string,
}

