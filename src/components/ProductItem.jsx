import { FavoriteBorder, Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

import { tablet } from "../responsive";
import { desktop } from "../responsive";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding-bottom: 10px;
    height: auto;
    background-color: #b0c5c4;
    border-radius: 5px;
    z-index:3 ;
`

const Img = styled.img`
max-width: 35vw;
${desktop({maxWidth: '15vw'})}
    
`
const Info = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
z-index: 2;
${desktop({})}
    
`
const Icon = styled.div`
width: 30px;
height: 30px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: .3s;
:hover{
    transform: scale(1.1);
}
${tablet({width: '45px', height: '45px'})}
z-index: 1;
    
`

const ProductItem = ({item}) => {
    return ( 
         <Container>
            <Img src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container> );
}
 
export default ProductItem;