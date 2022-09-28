import { UserInfo } from 'components/User/User'
import { UserStats } from 'components/UserStats/UserStats'
import { Container } from 'components/App/App.styled'

export const App = () => {
	return <Container>
		<UserInfo />
		<UserStats />
	</Container>
};


// компоненты App,
// UserInfo avatar - string, username - string, tag - str, location - str,
// UserStats - "followers": number, "views": number, "likes": number