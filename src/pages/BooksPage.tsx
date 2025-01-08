import { Link } from 'react-router-dom';
import '../assets/books.json';

const BooksPage = () => {
  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Link to={`/book/${index + 1}`}>{book}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
