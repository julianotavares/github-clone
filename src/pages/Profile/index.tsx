import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="julianotavares"
            name="Juliano Tavares"
            avatarUrl="https://avatars3.githubusercontent.com/u/38234499?s=460&u=465cde5b2afdf65c5b43d8c0496bde2fa5a7dd1a&v=4"
            followers={887}
            following={7}
            company="Rocketseat"
            location="São Paulo, Brazil"
            email="julianotavares@gmail.com"
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Ramdom repos</h2>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
