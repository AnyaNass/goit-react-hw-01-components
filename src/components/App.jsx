import { UserInfo } from 'components/User/User'
import { UserStats } from 'components/UserStats/UserStats'

export const App = () => {
	return <>
		<UserInfo />
		<UserStats />
	</>
};


// компоненты App,
// UserInfo avatar - string, username - string, tag - str, location - str,
// UserStats - "followers": number, "views": number, "likes": number