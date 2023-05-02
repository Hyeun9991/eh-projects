import styled from 'styled-components';

const Profile = () => {
  return (
    <Container>
      <LogoImage src={require('../../assets/logo.png')} alt="프로필 사진" />
      <UserName className='user-name'>EHUHYE</UserName>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const UserName = styled.h1`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;
