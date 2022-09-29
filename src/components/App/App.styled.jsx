import styled from '@emotion/styled'

export const Container = styled.div`
   width: 300px;
	text-align: center;
	margin: 20px auto 0 auto;
	border: 1px solid black;
	box-shadow: 5px 5px 7px gray;
`

export const StatisticsContainer = styled.div`
	width: 400px;
	text-align: center;
	margin: 40px auto 0 auto;
	border: 1px solid rgb(186, 182, 182);
`

export const StatisticsListContainer = styled.ul`
	display: flex;
	justify-content: space-between;
`

export const FriendsList = styled.ul`
	width: 400px;
	margin: 40px auto 0 auto;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const TransactionHistory = styled.table`
	width: 900px;
	margin: 40px auto;
`