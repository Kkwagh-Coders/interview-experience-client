import { useRef, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './DropDown.module.css';

type Props = {
  className: string;
  children: JSX.Element;
  titleText: string;
};

function DropDown({ titleText, children, className }: Props) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleCloseDropDown = () => {
    setIsDropDownOpen(false);
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen((state) => !state);
  };

  // To Detect if the user has clicked on other than drop down, if yes we close it
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, handleCloseDropDown);

  return (
    <div className={styles.dropDown} ref={wrapperRef}>
      <button
        type="button"
        className={`${styles.link} ${className}`}
        onClick={handleToggleDropDown}
      >
        {titleText}
        <AiOutlineCaretDown />
      </button>
      <div
        className={`${styles.dropDownMenu} ${
          isDropDownOpen ? styles.dropDownMenuActive : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropDown;
