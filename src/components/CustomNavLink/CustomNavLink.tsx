import { Link, useLocation } from 'react-router-dom';

type Props = {
  path: string;
  onClickCallback: () => void;
  children: string;
  className: string;
  activeClassName: string;
};

function CustomNavLink({
  path,
  onClickCallback,
  children,
  className,
  activeClassName,
}: Props) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li
      role="list"
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      <Link to={path} onClick={onClickCallback}>
        {children}
      </Link>
    </li>
  );
}

export default CustomNavLink;
