import styled from '@emotion/styled'

export const FriendCard = styled.li`
	display: flex;
	gap: 12px;
	align-items: center;
	padding: 8px;
	border: 1px solid #8e8e8e;
	border-radius: 10px;
	box-shadow: 0px 5px 5px #808080;
`

export const FriendAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`

export const FriendName = styled.p`
	font-size: 20px;
	letter-spacing: 1.5;
	font-weight: 600;
`