import Container from "../Container"
import StyledHeader from "./styled/StyledHeader"
import StyledLogo from "./styled/StyledLogo"
import HeaderContainer from "./styled/HeaderContainer"
import StyledMenu from "./styled/menu/StyledMenu"
import MenuLink from "./styled/menu/MenuLink"
import Controls from "./styled/controls/Controls";

const HeaderEl = () => {
    return (
        <StyledHeader>
            <Container flex>
                <HeaderContainer>
                    <StyledLogo>SomeGuysBlog</StyledLogo>
                    <StyledMenu>
                        <MenuLink current>Latest</MenuLink>
                        <MenuLink>Posts</MenuLink>
                        <MenuLink>React</MenuLink>
                        <MenuLink>CSS</MenuLink>
                    </StyledMenu>
                </HeaderContainer>
                <Controls />
            </Container>
        </StyledHeader>
    )
}

export default HeaderEl;