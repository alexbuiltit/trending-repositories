import { render, screen, fireEvent } from '@/utils/testUtils';
import { FilterItem } from '.';

const mockToggle = jest.fn();

describe('FilterItem', () => {
  it('should trigger the provided toggle when a user clicks the filter item', () => {
    render(<FilterItem toggle={() => mockToggle()} selected={false} text="JavaScript" />);
    fireEvent.click(screen.getByTestId('filter-item'));
    expect(mockToggle).toHaveBeenCalled();
  });

  it('should be in selected state when selected', () => {
    render(<FilterItem toggle={() => mockToggle()} selected={true} text="JavaScript" />);
    expect(screen.getByTestId('filter-item')).toHaveAttribute('data-selected', 'true');
  });

  it('should not be in selected state when not selected', () => {
    render(<FilterItem toggle={() => mockToggle()} selected={false} text="JavaScript" />);
    expect(screen.getByTestId('filter-item')).toHaveAttribute('data-selected', 'false');
  });
});
