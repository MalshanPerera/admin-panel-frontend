import styles from './Sidebar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.logo}>lamadmin</span>
      </div>
      <hr />
      <div className={styles.content}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>

          <li>
            <PeopleIcon className={styles.icon} />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className={styles.icon} />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>

          <li>
            <SettingsSystemDaydreamIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <BookIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <div className={styles.color_options}></div>
        <div className={styles.color_options}></div>
      </div>
    </div>
  );
};

export default Sidebar;
