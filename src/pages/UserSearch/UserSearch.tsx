import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchUser } from '../../services/user.services';
import styles from './UserSearch.module.css';

function UserSearch() {
  const [search, setSearch] = useState('');
  type ResponseType = {
    _id: string;
    username: string;
    designation: string;
    branch: string;
    passingYear: string;
  }[];

  // prettier-ignore
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', search],
    getNextPageParam: (prevData: {
      message: string;
      data: ResponseType;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => searchUser(search, pageParam, 10),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
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

  async function handleSearchInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearch(e.target.value);
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
          <div className={styles.listContainer}>
            <p> -- No User found -- </p>
          </div>
        ) : null}
        {!isEmpty && !isLoading ? (
          <>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th> Username</th>
                  <th> Designation</th>
                  <th> Branch</th>
                  <th> Passing Year </th>
                </tr>
              </thead>
              <tbody>
                {data?.pages
                  .flatMap((page) => page.data)
                  .map((user) => (
                    <tr className={styles.item} key={user._id}>
                      <td>
                        <Link
                          to={`/profile/${user._id}`}
                          className={styles.username}
                        >
                          {user.username}
                        </Link>
                      </td>

                      <td>{user.designation}</td>
                      <td>{user.branch}</td>
                      <td>{user.passingYear}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className={styles.scrollFooter}>{scrollFooterElement}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default UserSearch;
