import propTypes from 'prop-types'
import { Container } from '../UserContainer/UserContainer.styled'

export const UserContainer = ({ children }) => {
	return <Container>{children}</Container>
}

UserContainer.propTypes = {
	children: propTypes.array.isRequired,
}