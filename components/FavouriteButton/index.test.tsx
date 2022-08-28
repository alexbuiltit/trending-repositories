import { render, screen, fireEvent } from '@/utils/testUtils';
import { FavouriteButton } from '.';

const mockAction = jest.fn();

describe('FavouriteButton', () => {
  it('should trigger the provided action when a user clicks the button', () => {
    render(<FavouriteButton action={() => mockAction()} favourited={false} />);
    fireEvent.click(screen.getByTestId('favourite-button'));
    expect(mockAction).toHaveBeenCalled();
  });

  it('should be in favourited state when favourited', () => {
    render(<FavouriteButton action={() => mockAction()} favourited={true} />);
    expect(screen.getByTestId('favourite-button')).toHaveAttribute('data-favourited', 'true');
  });

  it('should not be in favourited state when not favourited', () => {
    render(<FavouriteButton action={() => mockAction()} favourited={false} />);
    expect(screen.getByTestId('favourite-button')).toHaveAttribute('data-favourited', 'false');
  });
});
