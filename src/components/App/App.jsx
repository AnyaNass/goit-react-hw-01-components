import user from '../../user'
import data from '../../data'
import friends from '../../friends'

import { UserInfo } from 'components/User/User'
import { UserStats } from 'components/UserStats/UserStats'
import { Container, StatisticsListContainer, StatisticsContainer, FriendsList } from 'components/App/App.styled'
import { Statistics } from 'components/Statistics/Statistics'
import { StatisticsList } from 'components/StatisticsList/StatisticsList'
import { Friend } from 'components/Friends/Friends'

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
	</>
};


