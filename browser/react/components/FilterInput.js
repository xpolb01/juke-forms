import React from 'react';

const FilterInput = (props) => {
  const handleChange = props.onChange;
  const value = props.value;
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={value}
        className="form-control"
        placeholder="Enter artist name"
      />
    </form>
  );
}

export default FilterInput;
