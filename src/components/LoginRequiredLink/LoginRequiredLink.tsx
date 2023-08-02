import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import LoginRequiredModal from '../LoginRequiredModal/LoginRequiredModal';

type Props = {
  textContent: string;
  to: string;
  className: string;
};

function LoginRequiredLink({ textContent, to, className }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userState = useAppSelector((state) => state.userState);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleNonLoggedInUserClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!userState.isLoggedIn) {
      event.preventDefault();
      openModal();
    }
  };

  return (
    <>
      {isModalOpen ? (
        <LoginRequiredModal closeModalCallback={closeModal} />
      ) : null}

      <Link to={to} className={className} onClick={handleNonLoggedInUserClick}>
        {textContent}
      </Link>
    </>
  );
}

export default LoginRequiredLink;
