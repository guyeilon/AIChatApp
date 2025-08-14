import { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Layout: FC = () => (
  <Container>
    <NavBar>
      <NavItem to="/" end>
        Chat
      </NavItem>
      <NavItem to="/Gallery">Gallery</NavItem>
    </NavBar>
    <Main>
      <Outlet />
    </Main>
  </Container>
);

export default Layout;

const Container = styled.div.attrs({ className: 'layout-container' })`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const NavItem = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;

  &.active {
    background-color: #e0e0e0;
  }

  &:hover {
    background-color: #efefef;
  }
`;

const Main = styled.main.attrs({ className: 'main' })`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;
