import Card from '../../components/card/Card';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TransactionTable from '../../components/trasactionTable/TransactionTable';
import { CardType } from '../../helpers/enums';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <div className={styles.cards}>
          <Card type={CardType.User} />
          <Card type={CardType.Order} />
          <Card type={CardType.Earnings} />
          <Card type={CardType.Balance} />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart title='Last 6 Months (Revenue)' aspect={3 / 1} />
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Home;
