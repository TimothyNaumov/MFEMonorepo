import axios from 'axios';
import styles from './getdashboardinfo.module.css';
import React, { useEffect } from 'react';
/* eslint-disable-next-line */
export interface GetdashboardinfoProps {}

export function Getdashboardinfo(props: GetdashboardinfoProps) {
  const [apiResponse, setApiResponse] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await axios('http://localhost:3333/api/dashboard');
      const message = result.data;
      setApiResponse(message);
    }

    fetchData();
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Here is your Dashboard Info:</h1>
      <h1>{apiResponse}</h1>
    </div>
  );
}

export default Getdashboardinfo;
