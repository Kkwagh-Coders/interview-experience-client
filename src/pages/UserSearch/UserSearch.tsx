import { useState } from 'react';
import { searchUser } from '../../services/user.services';
import styles from './UserSearch.module.css';

function UserSearch() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  async function handleSearchInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearch(e.target.value);
    const response = await searchUser(search);
    setData(response);
  }
  return (
    <div className={styles.UserSearch}>
      <div className="container">
        <h2> User Search </h2>
        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchBarInput}
            placeholder="Search..."
            onChange={handleSearchInputChange}
          />
        </div>

        {data?.map((user) => user)}
      </div>
    </div>
  );
}

export default UserSearch;
