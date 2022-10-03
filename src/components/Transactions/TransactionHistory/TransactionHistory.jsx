import propTypes from 'prop-types'
import { TransactionTable } from './TransactionHistory.styled'

export const TransactionHistory = ({ children }) => {
	return <TransactionTable>{children}</TransactionTable>
}

TransactionHistory.propTypes = {
	children: propTypes.array.isRequired,
}