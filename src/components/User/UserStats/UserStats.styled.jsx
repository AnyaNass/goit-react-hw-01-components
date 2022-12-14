import styled from '@emotion/styled'

export const StatsList = styled.ul`
	display: flex;
	background-color: rgb(224, 235, 239);
	border-top: 1px solid #000000;
`

export const StatsListItem = styled.li`
	display: flex;
	flex-direction: column;
	padding: 12px 0;
	width: 33.333%;
	gap: 8px;
	border-left: 1px solid #000000;

	:first-of-type{
		border: none;
	}
`
export const StatsItemLable = styled.span`
	color: gray;
	font-size: 14px;
`

export const StatsItemQuantity = styled.span`
	font-weight: 600;
`