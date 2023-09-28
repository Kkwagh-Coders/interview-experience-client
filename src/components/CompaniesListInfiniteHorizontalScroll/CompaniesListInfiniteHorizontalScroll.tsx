import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getCompanyAndRoleList } from '../../services/post.services';
import styles from './CompaniesListInfiniteHorizontalScroll.module.css';

function CompaniesListInfiniteHorizontalScroll() {
  const scroller = useRef<HTMLDivElement>(null);

  // Fetching in Position and Companies
  const companyAndRoleQuery = useQuery({
    queryKey: ['company-role-list'],
    queryFn: () => getCompanyAndRoleList(),
  });

  useEffect(() => {
    if (!scroller || !scroller.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    scroller?.current.setAttribute('data-animated', 'true');
  }, []);

  const companies = companyAndRoleQuery.data?.data.company;

  return (
    <div className={styles.scroller} ref={scroller}>
      <ul className={`${styles.tagList} ${styles.scrollerInner}`}>
        {companies?.map((company) => (
          <Link to={`/posts?company=${company}`}>
            <li key={company}>{company}</li>
          </Link>
        ))}

        {/* Duplicating the list: Since we are applying animation till 50% and then start again */}
        {companies?.map((company) => (
          <Link to={`/posts?company=${company}`}>
            <li
              key={`${company}-duplicate`}
              aria-hidden // hiding the duplicate from screen reader
            >
              {company}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CompaniesListInfiniteHorizontalScroll;
