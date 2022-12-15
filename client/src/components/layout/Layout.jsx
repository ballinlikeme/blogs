import Container from "../styles/Container";
import PageWrapper from "../styles/PageWrapper";

const Layout = ({children}) => {
    return (
        <PageWrapper>
            <Container>
                {children}
            </Container>
        </PageWrapper>
    )
}

export default Layout;