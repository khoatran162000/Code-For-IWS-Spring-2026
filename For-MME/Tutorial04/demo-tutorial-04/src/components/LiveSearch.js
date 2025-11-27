import React, { useState } from 'react';

// 1. Our 'database' of names. This is not state.
const allNames = {};

/**
 * A component that demonstrates a live search filter.
 * It combines a controlled input with array filtering
 * logic to show derived state.
 */
function LiveSearch() {
  // 2. We only need ONE piece of state: the search term.
  const [searchTerm, setSearchTerm] = useState('');

  // 3. This is DERIVED STATE. It's calculated on every render.
  //    We do NOT need a separate useState for the filtered list.
  const filteredNames = allNames.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '10px', fontFamily: 'sans-serif' }}>
      <h3>Live Name Search</h3>
      
      {/* 4. The input is a standard "controlled component" */}
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search names..."
        style={{ padding: '8px', fontSize: '16px', width: '300px' }}
      />

      {/* 5. We render the list, mapping over our DERIVED data */}
      <ul style={{ listStyleType: 'none', paddingLeft: '5px', marginTop: '10px' }}>
        {filteredNames.length > 0? (
          filteredNames.map(name => (
            // The 'key' prop is essential for list rendering
            <li key={name} style={{ padding: '5px' }}>
              {name}
            </li>
          ))
        ) : (
          // 6. Handle the empty/no-results state
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
}

export default LiveSearch;

