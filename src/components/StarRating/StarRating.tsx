import { useFormikContext } from 'formik';
import { Rating } from 'react-simple-star-rating';
import styles from './StarRating.module.css';

type Props = {
  name: string;
};

function StarRating({ name }: Props) {
  const formikProps = useFormikContext();

  const handleRating = (rate: number) => {
    formikProps.setFieldValue(name, rate);
  };

  return (
    <div className={styles.StarRating}>
      <div className={styles.App}>
        <Rating onClick={handleRating} />
      </div>
    </div>
  );
}
export default StarRating;
