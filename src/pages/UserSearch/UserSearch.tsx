import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { searchUser } from '../../services/user.services';
import styles from './UserSearch.module.css';

function UserSearch() {
  const [search, setSearch] = useState('');
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', search],
    getNextPageParam: (prevData: {
      message: string;
      data: { _id: string; username: string };
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => searchUser(search, pageParam, 2),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage) {
    scrollFooterElement = <p>Loading...</p>;
  } else if (hasNextPage) {
    scrollFooterElement = (
      <button
        type="button"
        className={`default-button ${styles.nextPageButton}`}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        Load More
      </button>
    );
  }
  // console.log()
  async function handleSearchInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearch(e.target.value);
    // const response = await searchUser(search);
    // setData(response);
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

        { data?.pages
          .flatMap((page) => page.data)
          .map((user) => (<h2 key={user._id}>{user.username}</h2>))}

        <div className={styles.scrollFooter}>{scrollFooterElement}</div>
      </div>
    </div>
  );
}

export default UserSearch;
