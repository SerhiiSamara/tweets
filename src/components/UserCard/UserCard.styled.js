import styled from 'styled-components';

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  display: block;
  opacity: 0.7;
`;

export const CardImg = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;
`;

export const CardLine = styled.img`
  display: block;
  /* margin-bottom: 62px; */
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-top: -50px;
  margin-bottom: 26px;
`;

export const EllipsFrame = styled.img`
  display: block;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  position: absolute;
  top: 50%;
  left: 65%;
  font-size: 20px;
  color: #5cd3a8;
`;

export const Tweets = styled.p`
  display: block;
  margin-bottom: 16px;
  font-size: 20px;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  display: block;
  margin-bottom: 26px;
  font-size: 20px;
  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  font-size: 18px;
  color: #373737;
  background-color: ${props => props.bgcolor};
  border-radius: 10px;
  &:hover {
    width: 200px;
    height: 52px;
    opacity: 0.8;
  }
`;
