import React, { useState } from "react";

const useDropdown = function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = function dropdown() {
    return (
      <label htmlFor={label}>
        <select
          name={id}
          id={id}
          value={state}
          disabled={options.length === 0}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
        >
          <option value="All">All</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
