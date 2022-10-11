import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EcomNavbar from '../components/EcomNavbar'
import EcomAnnouncement from '../components/EcomAnnouncement'
import EcomNewsLetter from '../components/EcomNewsLetter'
import EcomFooter from '../components/EcomFooter'
import { mobile, bmobile, tablet, laptop } from '../components/EcomResponsive'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Container = styled.div``;

const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        align-items: center;
        ${mobile({ padding: "10px 30px", flexDirection: "column" })};
        ${bmobile({ padding: "10px 30px", flexDirection: "column" })};
        `;

const ImgContainer = styled.div`
        flex:1;
        `;

const Image = styled.img`
        width: 80%;
        height: 80%;
        object-fit:cover;
        /* ${mobile({ height: "50vh" })} */
        /* ${bmobile({ height: "50%", width: '70%' })} */
        /* ${tablet({ height: "90%", width: '90%' })} */
        `;

const InfoContainer = styled.div`
        flex:1;
        padding: 0px 50px;
        ${mobile({ padding: "10px" })};
        ${bmobile({ padding: "10px" })};
        `;

const Title = styled.h1`
        font-weight: 400;
        `;

const Desc = styled.p`
        margin: 20px 0px;
        `;

const Price = styled.span`
        font-weight: 100;
        font-size: 40px;
        `;

const FilterContainer = styled.div`
        display:flex;
        justify-content:space-between;
        width: 38%;
        margin: 20px 0px;
        ${mobile({ width: "100%" })}
        ${bmobile({ width: "100%" })}
        `;

const Filter = styled.div`
        display:flex;
        align-items:center;
        `;

const FilterTitle = styled.span`
        font-size: 20px;
        font-weight: 200;
        `;

const FilterColor = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => props.color};
        margin: 0px 5px;
        cursor: pointer;
        `;

const FilterSize = styled.select`
        margin-left: 10px;
        padding: 5px;
        cursor: pointer;
        `;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
        display:flex;
        justify-content: space-between;
        width: 38%;
        margin: 30px 0px;
        ${mobile({ width: "100%", })}
        ${bmobile({ width: "100%", })}
        ${tablet({ width: "100%", })}
        ${laptop({ width: "100%", })}
        `;

const AmountContainer = styled.div`
        display:flex;
        align-items: center;
        font-weight: 700;
        margin-right: 30px;

        `;

const Amount = styled.span`
        margin: 0px 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid teal;
        display: flex;
        align-items: center;
        justify-content: center;
        `;

const Button = styled.button`
        padding: 15px;
        border: 2px solid teal;
        background-color: white;
        cursor: pointer;
        font-weight: bold;

        &:hover{
            background-color: #f5e7e7;
        }
        `;



const EcomProductSingle = () => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState();
    const [amount, setAmount] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    function beforeZero() {
        if (amount <= 0) {
            setAmount(0)
        } else {
            setAmount(amount - 1)
        }
    }

    const loadProduct = async () => {
        try {
            const productData = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const response = await productData.data
            setProduct(response)
        }
        catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        loadProduct();
    }, [])

    function gotocart(e) {
        e.preventDefault();
        navigate('/ecom/cart')
    }

    if (error) {
        return `Error:${error.message}`
    }


    return (
        <Container>
            <EcomNavbar />
            <EcomAnnouncement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <i class="fa-solid fa-minus" style={{ cursor: 'pointer' }} onClick={beforeZero} />
                            <Amount>{amount}</Amount>
                            <i class="fa-solid fa-plus" style={{ cursor: 'pointer' }} onClick={() => setAmount(amount + 1)} />
                        </AmountContainer>
                        <Button onClick={gotocart}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <EcomNewsLetter />
            <EcomFooter />
        </Container>
    )
}

export default EcomProductSingle