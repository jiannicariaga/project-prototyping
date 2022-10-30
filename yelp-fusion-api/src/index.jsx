import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchResults from './search-results';

const container = document.querySelector('#results');
const root = ReactDOM.createRoot(container);

root.render(<SearchResults />);
