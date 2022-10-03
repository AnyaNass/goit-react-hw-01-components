import user from '../../data/user'
import data from '../../data/data'
import friends from '../../data/friends'
import transactions from '../../data/transactions'

import { UserContainer } from '../User/UserContainer/UserContainer'
import { UserInfo } from 'components/User/UserInfo/User'
import { UserStats } from 'components/User/UserStats/UserStats'

import { StatisticsContainer } from '../Statistics/StatisticsContainer/StatisticsContainer'
import { StatisticsListContainer } from '../Statistics/StatisticsListContainer/StatisticsListContainer'
import { StatisticsHeader } from 'components/Statistics/StatisticsHeader/StatisticsHeader'
import { StatisticsList } from 'components/Statistics/StatisticsList/StatisticsList'

import { FriendsList } from '../Friends/FriendsList/FriendsList'
import { Friend } from 'components/Friends/FriendCard/Friends'

import { TransactionHistory } from '../Transactions/TransactionHistory/TransactionHistory'
import { TransactionTableHead } from 'components/Transactions/TransactionTableHead/TransactionTableHead'
import { TransactionItem } from 'components/Transactions/TransactionItem/TransactionItem'


export const App = () => {
	return <>
		<UserContainer>
			<UserInfo
				avatar={user.avatar}
				username={user.username}
				tag={user.tag}
				location={user.location}
			/>
			<UserStats user={user} />
		</UserContainer>
		<StatisticsContainer>
			<StatisticsHeader title="Upload stats" />
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


