import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.Error}>
      <div className={styles.container}>
        <div className={styles.mainGraphic}>
          <h1 className={styles.errorCode}>500</h1>

          <svg
            className={styles.cog}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M29.18 19.07c-1.678-2.908-.668-6.634 2.256-8.328L28.29 5.295c-.897.527-1.942.83-3.057.83-3.36 0-6.085-2.743-6.085-6.126h-6.29c.01 1.043-.25 2.102-.81 3.07-1.68 2.907-5.41 3.896-8.34 2.21L.566 10.727c.905.515 1.69 1.268 2.246 2.234 1.677 2.904.673 6.624-2.24 8.32l3.145 5.447c.895-.522 1.935-.82 3.044-.82 3.35 0 6.066 2.725 6.083 6.092h6.29c-.004-1.035.258-2.08.81-3.04 1.676-2.902 5.4-3.893 8.325-2.218l3.145-5.447c-.9-.515-1.678-1.266-2.232-2.226zM16 22.48c-3.578 0-6.48-2.902-6.48-6.48S12.423 9.52 16 9.52c3.578 0 6.48 2.902 6.48 6.48s-2.902 6.48-6.48 6.48z" />
          </svg>
        </div>

        <h1 className={styles.mainTitle}>An error has occurred</h1>
        <p className={styles.mainDescription}>
          Server is currently under high load - please hit &apos reload &apos on
          your browser in a minute to try again
        </p>
      </div>
    </div>
  );
}

export default Error;
