import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import userListImage from '../../assets/images/pages/user-list.png';
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
    queryFn: ({ pageParam = 1 }) => searchUser(search, pageParam, 15),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
    scrollFooterElement = <p>Loading...</p>;
  }

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: Event) => {
      if (!event.target) return;

      const target = event.target as Document;
      const scrollElement = target.scrollingElement;
      if (!scrollElement) return;
      const { scrollHeight, scrollTop, clientHeight } = scrollElement;
      const scrollHeightRemaining = scrollHeight - scrollTop;

      if (!fetching && scrollHeightRemaining <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    // console.log(document.addEventListener('scroll', onScroll));
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [fetchNextPage, hasNextPage]);

  async function handleSearchInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearch(e.target.value);
  }

  const isEmpty = data?.pages[0].data.length === 0;
  return (
    <>
      <Helmet>
        <title>User List | Interview Experience</title>
        <meta
          name="description"
          content="Search seniors and alumni and connect with them on Interview Experience KKWIEER"
        />
        <meta name="twitter:card" content={userListImage} />
        <meta name="twitter:title" content="User List | Interview Experience" />
        <meta
          name="twitter:description"
          content="Search seniors and alumni and connect with them on Interview Experience KKWIEER"
        />
        <meta name="twitter:image" content={userListImage} />

        <meta property="og:title" content="User List | Interview Experience" />
        <meta
          property="og:description"
          content="Search seniors and alumni and connect with them on Interview Experience KKWIEER"
        />
        <meta property="og:image" content={userListImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}/user/search`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
    </>
  );
}

export default UserSearch;
