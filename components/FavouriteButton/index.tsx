import { FavouriteButtonWrapper } from './index.styled';

type FavouriteButtonType = {
  favourited: boolean;
  action: () => void;
};

export const FavouriteButton = ({ favourited, action }: FavouriteButtonType) => {
  return (
    <FavouriteButtonWrapper data-testid="favourite-button" onClick={action} data-favourited={favourited}>
      <span className="favourite-button__text">{favourited ? 'Favourited' : 'Favourite'}</span>
      <span className="favourite-button__icon">
        <svg width="16" height="16" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5308 3.60795L12.0001 4.88174L12.4692 3.60789C13.3602 1.18839 16.0684 0.106068 18.6509 0.62831C21.1839 1.14056 23.5 3.19824 23.5 7.00311C23.5 10.7744 20.6781 15.9886 12 21.4116C3.32188 15.9886 0.5 10.7744 0.5 7.00311C0.5 3.17441 2.81892 1.12584 5.35149 0.623033C7.93585 0.109943 10.6451 1.20372 11.5308 3.60795Z"
            stroke="black"
          />
        </svg>
      </span>
    </FavouriteButtonWrapper>
  );
};
