import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TransactionTable from '../../components/trasactionTable/TransactionTable';
import styles from './Single.module.scss';

const Single = () => {
  return (
    <div className={styles.single}>
      <Sidebar />
      <div className={styles.singleContainer}>
        <Navbar />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img
                src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                alt=''
                className={styles.itemImg}
              />
              <div className={styles.details}>
                <h1 className={styles.itemTitle}>Jane Doe</h1>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Email:</span>
                  <span className={styles.itemValue}>janedoe@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Phone:</span>
                  <span className={styles.itemValue}>+1 2345 67 89</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Address:</span>
                  <span className={styles.itemValue}>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.itemKey}>Country:</span>
                  <span className={styles.itemValue}>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Chart title='User Spending ( Last 6 Months)' aspect={3 / 1} />
          </div>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Single;
