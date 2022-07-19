import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
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
      </div>
    </div>
  );
};

export default Home;
