import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="julianotavares"
                  reponame="github-clone"
                  description="Contain all of github clone with ReactJS using Typscript"
                  stars={}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
