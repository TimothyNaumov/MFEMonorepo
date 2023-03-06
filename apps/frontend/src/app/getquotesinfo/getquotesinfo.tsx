import styles from './getquotesinfo.module.css';

/* eslint-disable-next-line */
export interface GetquotesinfoProps {}

export function Getquotesinfo(props: GetquotesinfoProps) {
  return (
    <div className={styles['container']}>
      <h1>Here is your Quotes Info:</h1>
    </div>
  );
}

export default Getquotesinfo;
