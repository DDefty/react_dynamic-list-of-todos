import { Filter } from '../../App';
import React, { useState } from 'react';

type Props = {
  handleFilterChange: (filter: Filter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export const TodoFilter: React.FC<Props> = ({ 
  handleFilterChange, 
  searchQuery, 
  onSearchChange 
}) => {
  const [filterOption, setFilterOption] = useState<Filter>('all');

  const handleClearSearch = () => {
    onSearchChange('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filterOption}
            onChange={e => {
              const newFilter = e.target.value as Filter;

              setFilterOption(newFilter);
              handleFilterChange(newFilter);
            }}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {searchQuery && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClearSearch}
            />
          </span>
        )}
      </p>
    </form>
  );
};
