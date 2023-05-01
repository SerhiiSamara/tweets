import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30vh;
`;

export const ContentWrap = styled.div`
  display: block;
`;

export const Title = styled.h1`
  display: block;
  width: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 36px;
  color: #179b6a;
  border-radius: 50%;
  border: solid 3px #179b6a;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.div`
  display: block;
`;
