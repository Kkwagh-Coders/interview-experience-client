import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchUser } from '../../services/user.services';
import styles from './UserSearch.module.css';

function UserSearch() {
  const [search, setSearch] = useState('');
  type ResponseType = { _id: string; username: string }[];

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', search],
    getNextPageParam: (prevData: {
      message: string;
      data: ResponseType
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

  const isEmpty = data?.pages[0].data.length === 0;
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

        {isEmpty ? (
          <center>
            <div className={styles.listContainer}>
              <p> -- No User found -- </p>
            </div>
          </center>
        ) : null}
        {!isEmpty ? (
          <>
            <div className={styles.listContainer}>
              <ul>
                {data?.pages
                  .flatMap((page) => page.data)
                  .map((user) => (
                    <div className={styles.item}>
                      <h2 key={user._id}>
                        <Link
                          to={`/profile/${user._id}`}
                          className={styles.username}
                        >
                          {user.username}
                        </Link>
                      </h2>
                    </div>
                  ))}
              </ul>
            </div>
            <div className={styles.scrollFooter}>{scrollFooterElement}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default UserSearch;

/*

const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', search],
    getNextPageParam: (prevData: {
      message: string;
      data: ResponseType
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => searchUser(search, pageParam, 2),
  });
*/
