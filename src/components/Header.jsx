import React from 'react';
import {
    Button,
    HeaderContent,
    HeaderLogo,
    HeaderRoot,
    HeaderSubtitle,
    HeaderTitle,
    HeaderTitleWrapper
} from "@salutejs/plasma-ui";
import {Container} from "@salutejs/plasma-ui/components/Grid";
import {useHistory} from "react-router-dom";

function Header() {
    const router = useHistory()

    return (
        <Container>
            <HeaderRoot>

                <HeaderLogo src="https://i.ibb.co/TcXZDMq/Group-154.png" alt="Logo"/>
                <HeaderTitleWrapper>
                    <HeaderSubtitle>Rina</HeaderSubtitle>
                    <HeaderTitle>&ensp;Цифровой официант</HeaderTitle>
                </HeaderTitleWrapper>
                <HeaderContent>
                    <Button onClick={() => router.replace("/restaurant")}>Меню</Button> </HeaderContent>
            </HeaderRoot>
        </Container>
    )
}

export default Header;