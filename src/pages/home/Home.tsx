import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        HomeContainer
      </div>
    </div>
  );
};

export default Home;
