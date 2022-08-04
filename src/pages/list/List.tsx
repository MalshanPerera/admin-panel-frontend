import DataTable from '../../components/dataTable/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import styles from './List.module.scss';

const List = () => {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles.listContainer}>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
