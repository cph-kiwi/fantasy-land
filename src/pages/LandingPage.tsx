import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState(
    new URLSearchParams(useLocation().search).get('search') || ''
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Do you live in fantasy land?</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a book"
      />
      <Link to={`/?search=${searchTerm}`}>Search</Link>
      <h2>Latest Books</h2>
      {/* Display latest 3 books - replace with your book data */}
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
      <nav>
        <Link to="/books">Books</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
