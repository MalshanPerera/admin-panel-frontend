import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styles from './Featured.module.scss';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <div className={styles.title}>Total Revenue</div>
        <MoreVertRoundedIcon fontSize='medium' />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            className={styles.progressBar}
          />
        </div>
        <div className={styles.title}>Total sales made today</div>
        <div className={styles.amount}>$420</div>
        <div className={styles.description}>
          Previous transactions processing. Last payments may not be included
        </div>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Target</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpRoundedIcon fontSize='small' />
              <div className={styles.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={`${styles.itemResult} ${styles.negative}`}>
              <KeyboardArrowDownRoundedIcon fontSize='small' />
              <div className={styles.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={`${styles.itemResult} ${styles.positive}`}>
              <KeyboardArrowUpRoundedIcon fontSize='small' />
              <div className={styles.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
