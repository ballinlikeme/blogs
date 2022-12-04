import styled from "styled-components"

const StyledLink = styled.a.attrs({
    href: "/"
})
`
font-weight: var(--light-font);

${props => props.current && `
    font-weight: var(--semibold-font);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: var(--help-color);
    }
    `
}
`

const MenuLink = (props) => {
    return <StyledLink {...props} />
}

export default MenuLink;