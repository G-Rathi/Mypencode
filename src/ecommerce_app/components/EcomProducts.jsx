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


const EcomProducts = () => {
    const [productData, setProductData] = useState([]);

    const getData = async () => {
        try {
            const productsdata = await axios.get('https://fakestoreapi.com/products')
            const res = await productsdata.data
            setProductData(res)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

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