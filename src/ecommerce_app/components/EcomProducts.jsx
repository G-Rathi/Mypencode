import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile, bmobile } from './EcomResponsive';
import EcomProduct from './EcomProduct';
import axios from 'axios';

const Container = styled.div`
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        ${mobile({ justifyContent: "center", alignItems: 'center' })}
        ${bmobile({ justifyContent: "center", alignItems: 'center' })}
        `;

const EcomProducts = ({ cat, filters, sort }) => {

    const [productData, setProductData] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res)
                setProductData(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    console.log(productData);

    return (
        <Container>
            {
                productData.slice(0, 8).map(item => (
                    <EcomProduct item={item} key={item.id} />
                ))}
        </Container>
    )
}

export default EcomProducts