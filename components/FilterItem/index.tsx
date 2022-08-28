import { FilterItemButton } from './index.styled';

type FilterItemType = {
  text: string;
  selected?: boolean;
  toggle: () => void;
};

export const FilterItem = ({ text, selected, toggle }: FilterItemType) => (
  <FilterItemButton
    className="filter_item"
    data-selected={selected}
    data-testid="filter-item"
    onClick={toggle}
    type="button"
  >
    {text}
    <span className="filter_item__icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </span>
  </FilterItemButton>
);
