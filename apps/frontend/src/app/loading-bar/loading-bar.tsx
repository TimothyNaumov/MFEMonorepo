import { Box, Button, Typography } from '@mui/material';
import styles from './loading-bar.module.css';
import { ChangeEvent, useState } from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';

import axios from 'axios';
/* eslint-disable-next-line */
export interface LoadingBarProps {}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export function LoadingBar(props: LoadingBarProps) {
  const [image, setImage] = useState<File>();
  const [progress, setProgress] = useState(0);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    const config = {
      headers: {
        'Content-Type': image.type,
      },
      onUploadProgress: function (progressEvent: any) {
        const { loaded, total } = progressEvent;
        const percentCompleted = (loaded / total) * 100;
        console.log(percentCompleted);
        setProgress(percentCompleted);
      },
    };

    axios
      .post('https://httpbin.org/post', formData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to LoadingBar!</h1>
      <Button variant="contained" component="label">
        Upload Image
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={onFileChange}
        />
      </Button>
      <Button variant="contained" component="label" onClick={handleUploadClick}>
        Send
      </Button>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}

export default LoadingBar;
