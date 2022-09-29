import user from '../../user'
import data from '../../data'
import friends from '../../friends'
import transactions from '../../transactions'

import { UserInfo } from 'components/User/User'
import { UserStats } from 'components/UserStats/UserStats'
import { Container, StatisticsListContainer, StatisticsContainer, FriendsList } from 'components/App/App.styled'
import { Statistics } from 'components/Statistics/Statistics'
import { StatisticsList } from 'components/StatisticsList/StatisticsList'
import { Friend } from 'components/Friends/Friends'
import { TransactionHistory } from 'components/App/App.styled'
import { TransactionTableHead } from 'components/TransactionTableHead/TransactionTableHead'
import { TransactionItem } from 'components/TransactionItem/TransactionItem'


export const App = () => {
	return <>
		<Container>
			<UserInfo
				avatar={user.avatar}
				username={user.username}
				tag={user.tag}
				location={user.location}
			/>
			<UserStats />
		</Container>
		<StatisticsContainer>
			<Statistics title="Upload stats" />
			<StatisticsListContainer>
				{data.map(element => < StatisticsList
					key={element.id}
					label={element.label}
					percentage={element.percentage}
				/>)}
			</StatisticsListContainer>
		</StatisticsContainer>
		<FriendsList>
			{friends.map(friend => <Friend
				key={friend.id}
				avatar={friend.avatar}
				name={friend.name}
				status={friend.isOnline}
			/>)}
		</FriendsList>
		<TransactionHistory>
			<TransactionTableHead type="Type" amount="Amount" currency="Currency" />
			<tbody>
				{transactions.map(transaction => <TransactionItem
					key={transaction.id}
					type={transaction.type}
					amount={transaction.amount}
					currency={transaction.currency}
				/>)}
			</tbody>
		</TransactionHistory>
	</>
};


