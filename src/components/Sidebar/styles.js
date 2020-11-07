import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 120px;
  height: 100%;
  background-image: linear-gradient(to bottom right, #009cde, #0073cc);
  flex-direction: column;

  transition: all 0.7s ease 0s;

  &:hover {
    width: 240px;
  }
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  width: 200px;
  text-align: center;
  text-decoration: none;
  padding-top: 20px;
  color: #eee;

  &:hover {
    color: #fff;
  }
`;