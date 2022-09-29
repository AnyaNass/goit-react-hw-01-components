import propTypes from 'prop-types'
import { Item, ItemColumn } from 'components/TransactionItem/TransactionItem.styled'

export const TransactionItem = ({ id, type, amount, currency }) => {
	return <ItemColumn key={id}>
		<Item>{type}</Item>
		<Item>{amount}</Item>
		<Item>{currency}</Item>
	</ItemColumn>
}

TransactionItem.propTypes = {
	id: propTypes.string,
	type: propTypes.string,
	amount: propTypes.string,
	currency: propTypes.string,
}