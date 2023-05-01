import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const CardsList = styled.ul`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  width: 1172px;
  grid-template-columns: repeat(auto-fit, 380px);
  gap: 16px;
`;

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 460px;
  padding-top: 26px;
  border: 1px solid black;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
  font-size: 24px;
  color: #179b6a;
  border-radius: 10px;
  border: solid 3px #179b6a;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
