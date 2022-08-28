import { RepositoryType } from 'types/types';
import { FavouriteButton } from '../FavouriteButton';
import { Pill } from '../Pill/index.styled';
import { CardHeading, CardMenu, RepositoryCardContent, RepositoryCardWrapper } from './index.styled';

export const RepositoryCard = ({
  name,
  description,
  starCount,
  language,
  id,
  favourite = false,
  link,
  toggleFavourite,
}: RepositoryType) => (
  <RepositoryCardWrapper data-repo-id={id} data-testid="repository-card">
    <RepositoryCardContent>
      <CardHeading>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </CardHeading>
      {language && <Pill>{language}</Pill>}
      <p>{description}</p>
      <CardMenu>
        <p>Stars: {starCount}</p>
        {toggleFavourite && <FavouriteButton favourited={favourite} action={() => toggleFavourite(id)} />}
      </CardMenu>
    </RepositoryCardContent>
  </RepositoryCardWrapper>
);
