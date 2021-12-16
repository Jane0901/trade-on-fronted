import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MEDIA_QUERY_SM } from '../../styles/breakpoints'

const NavbarLink = styled(Link)`
  margin: 0 1.4rem;
  color: ${(props) => props.theme.general_000};
  height: 100%;
  ${MEDIA_QUERY_SM} {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
  }
`

const Icon = styled.div`
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  ${MEDIA_QUERY_SM} {
    display: none;
  }
`

const Label = styled.span`
  vertical-align: middle;
`

export const BackstageNavbarItem = ({ item, onClick }) => {
  return (
    <NavbarLink to={item.path} onClick={onClick}>
      {item.icon && <Icon>{item.icon}</Icon>}
      <Label>{item.title}</Label>
    </NavbarLink>
  )
}
