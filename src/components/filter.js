import React, { useState } from 'react';

function Filter(props) {
  const [filter, setFilter] = useState(props.categories);

	const handleChange = (elementChanged) => {
		var blogCategories = [...filter];
		blogCategories[elementChanged].checked = !filter[elementChanged].checked;

		setFilter(blogCategories);
		triggerFilter();
	}

	const triggerFilter = () => {
		props.changeFilter(filter);
  }

  return (
    <div>
      <form aria-label="Filter blog categories" tabIndex="0">
				{filter.map((filterGroup, index) => 
					<fieldset key={index}>
						<input type="checkbox" id={filterGroup.category} name={filterGroup.category} checked={filter[index].checked} onChange={(e) => handleChange(index)}/>
						<label htmlFor={filterGroup.category}>{filterGroup.category}</label>
					</fieldset>
				)}
			</form>
    </div>
  );
} 

export default Filter;