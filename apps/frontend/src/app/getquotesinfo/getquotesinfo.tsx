import styles from './getquotesinfo.module.css';
import React, { useEffect } from 'react';
import axios from 'axios';
/* eslint-disable-next-line */
export interface GetquotesinfoProps {}

export function Getquotesinfo(props: GetquotesinfoProps) {
  const [apiResponse, setApiResponse] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await axios('http://localhost:3333/api/quote');
      const message = result.data;
      setApiResponse(message);
    }

    fetchData();
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Here is your Quote Info:</h1>
      <h1>{apiResponse}</h1>
    </div>
  );
}

export default Getquotesinfo;
