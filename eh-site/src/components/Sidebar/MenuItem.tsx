import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Props {
  path: string;
  menuName: string;
}

const MenuItem = ({ path, menuName }: Props) => {
  const { pathname } = useLocation();
  const focus = pathname === path ? true : false;

  return (
    <Container focus={focus} className='menu-item'>
      <Link to={path}>{menuName}</Link>
    </Container>
  );
};

export default MenuItem;

interface ContainerProps {
  focus: boolean;
}

const Container = styled.li<ContainerProps>`
  padding: 0.7rem 0.8rem;
  font-size: 14px;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
  }

  ${({ focus }) => {
    if (focus) {
      return css`
        background-color: ${({ theme }) => theme.secondary};
      `;
    }
  }}
`;
