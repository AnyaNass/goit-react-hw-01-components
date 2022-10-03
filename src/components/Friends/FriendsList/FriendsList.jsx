import propTypes from 'prop-types'
import { FriendsListWrapper } from '../FriendsList/FriendsList.styled'

export const FriendsList = ({ children }) => {
	return <FriendsListWrapper>{children}</FriendsListWrapper>
}

FriendsList.propTypes = {
	children: propTypes.array.isRequired,
}