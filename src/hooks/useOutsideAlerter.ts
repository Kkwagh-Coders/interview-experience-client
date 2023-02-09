import { useEffect } from 'react';

const useOutsideAlerter = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  actionCallback: () => void,
) => {
  // The useEffect is used to handle the closing of the drop down
  useEffect(() => {
    // Attribution: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;

      const target = event.target as HTMLDivElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        actionCallback();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, actionCallback]);
};

export default useOutsideAlerter;
