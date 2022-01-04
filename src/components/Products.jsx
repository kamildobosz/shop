import styled from "styled-components";

import { popularProducts } from "../data/popular_products";
import ProductItem from "./ProductItem";

import {tablet} from "../responsive"

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 30px;
    margin: 10px auto;
    ${tablet({padding: '30px', fontSize: '40px'})}
`

const Products = () => {
    return ( 
        <Container>
            <Title>Popularne produkty</Title>
            {popularProducts.map(item=>(
            <ProductItem key={item.id} item={item}/>
            ))}

        </Container>
     );
}
 
export default Products;