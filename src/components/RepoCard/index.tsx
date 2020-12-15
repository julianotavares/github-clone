import React from 'react';
import { Link } from 'react-router-dom';


import { Container } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: string;
  forks: number;
}

const RepoCard: React.FC<Props> = (
  username,
  reponame,
  description,
  language,
  stars,
) => {
  return (
    (
<Container>
      <TopSide>

        <header>
        <RepoIcon />
        <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </TopSide>
      <BotSite>

      </BotSite>

  </Container>
);
};

export default RepoCard;
