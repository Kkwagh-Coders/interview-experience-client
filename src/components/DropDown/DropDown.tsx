import { useEffect, useRef, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import styles from './DropDown.module.css';

type Props = {
  className: string;
  children: JSX.Element;
  titleText: string;
};

function DropDown({ titleText, children, className }: Props) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // To Detect if the user has clicked on other than drop down, if yes we close it
  const wrapperRef = useRef<HTMLDivElement>(null);

  // The useEffect is used to handle the closing of the drop down
  useEffect(() => {
    // Attribution: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;

      const target = event.target as HTMLDivElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setIsDropDownOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleToggleDropDown = () => {
    setIsDropDownOpen((state) => !state);
  };

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
