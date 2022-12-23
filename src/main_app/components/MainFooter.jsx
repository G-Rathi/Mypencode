import React from 'react'
import styled from "styled-components"
import { mobile, bmobile, tablet, } from "../../ecommerce_app/components/EcomResponsive";
import { Link, useNavigate } from 'react-router-dom';




const Container = styled.div`
       color: white;
       background-color: black;
       align-content: center;
        `;
const Wrapper = styled.div`
        display:flex;
        color: white;
        padding:10px;
        ${mobile({ flexDirection: "column" })}
        ${bmobile({ flexDirection: "column" })}
        ${tablet({ flexDirection: "column" })}
        `;
const Left = styled.div`
        flex:1;
        display:flex;
        flex-direction: column;
        padding: 20px;
        `;
const Logo = styled.h1`
        cursor:pointer;
        `;
const Desc = styled.p`
        margin: 20px 0px;
        `;
const SocialContainer = styled.div`
        display:flex;
        ${mobile({ justifyContent: "center" })};
        `;

const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius:50%;
        background-color:${props => props.color};
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover{
            transform: scale(1.5);
            color:wheat;
            }
        `;
const Center = styled.div`
        flex:1;
        padding: 20px;
        /* ${mobile({ display: "none" })}; */
        `;
const Title = styled.h3`
        margin-bottom: 30px;
        `;
const List = styled.ul`
        margin:0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        `;
const ListItem = styled.li`
        cursor:pointer;
        width: 50%;
        margin-bottom: 10px;
        transition: all 0.5s ease;

        &:hover{
            transform: scale(1.1)
            }
        `;
const Right = styled.div`
        flex:1;
        padding: 20px;
        `;
const ContactItem = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        `;
const CopyRightEnd = styled.div`
        display:flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding-bottom:2rem;
        `;



const MainFooter = () => {
    const navigate = useNavigate()

    const logo = () => navigate('/')

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo onClick={logo}>Mypencode</Logo>
                    <Desc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magni maiores labore eos molestiae illum dolorum, ratione saepe reiciendis, assumenda dolores at itaque sapiente nesciunt consequuntur similique officiis nobis excepturi.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color='blue'>
                            <i className="fa-brands fa-facebook-f" />
                        </SocialIcon>
                        <SocialIcon color='pink'>
                            <i className="fa-brands fa-instagram" />
                        </SocialIcon>
                        <SocialIcon color='lightblue'>
                            <i className="fa-brands fa-twitter" />
                        </SocialIcon>
                        <SocialIcon color='red'>
                            <i className="fa-brands fa-pinterest" />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></ListItem>
                        <ListItem><Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About</Link></ListItem>
                        <ListItem>Terms</ListItem>
                        <ListItem>Blogs</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact Us</Title>
                    <ContactItem><i className="fa-solid fa-location-dot" style={{ marginRight: "10px" }} />310 Welcome, Faridabad, Haryana 123456</ContactItem>
                    <ContactItem><i className="fa-solid fa-phone" style={{ marginRight: "10px" }} />+91-9873******</ContactItem>
                    <ContactItem><i className="fa-regular fa-envelope" style={{ marginRight: "10px" }} />contact@pencode.tech</ContactItem>
                </Right>
            </Wrapper>
            <CopyRightEnd>
                <hr style={{ width: "70%", marginTop: "50px" }} />
                Copyright &#169; 2022 pencode.tech, All Rights Reserved.
            </CopyRightEnd>
        </Container>
    )
}

export default MainFooter