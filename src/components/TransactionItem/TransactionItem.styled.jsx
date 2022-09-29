import styled from '@emotion/styled'

export const Item = styled.td`
	text-align: center;
	font-size: 16px;
	padding: 8px 0;
	text-transform: capitalize;
`
export const ItemColumn = styled.tr`
background-color: rgb(227, 226, 232);

	:nth-of-type(2n){
		background-color: rgb(209, 205, 230);
	}
`