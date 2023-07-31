import {ReactComponent as ShoppingSVG} from '../../assets/bag-shopping-solid.svg'
import styled from "styled-components";

export const ShoppingIcon = styled(ShoppingSVG)`
    width: 34px;
    heigth: 34px;
`

export const CartIconContainer = styled.div `
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemCount = styled.span `
    position: absolute;
    color: white;
    font-size: 20px;
    font-weight: bold;
    bottom: 9px;
`