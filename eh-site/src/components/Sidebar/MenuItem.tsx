import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ContainerProps {
  focus: boolean;
}

const Container = styled.div<ContainerProps>`
  padding: 1rem 0.5rem;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    opacity: 0.4;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    display: inline-block;

    &:hover {
      opacity: 1;
    }
  }

  ${({ focus, theme }) => {
    if (focus) {
      return css`
        a {
          opacity: 1;
          border-bottom: 0.15rem solid ${theme.textColor};
        }
      `;
    }
  }}
`;

interface Props {
  path: string;
  menuName: string;
}

const MenuItem = ({ path, menuName }: Props) => {
  const { pathname } = useLocation();
  const focus = pathname === path ? true : false;

  return (
    <Container focus={focus}>
      <Link to={path}>{menuName}</Link>
    </Container>
  );
};

export default MenuItem;
