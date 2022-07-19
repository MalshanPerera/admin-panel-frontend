import styles from './Navbar.module.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type='text' placeholder='Search' />
          <SearchRoundedIcon />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.count}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            <div className={styles.count}>1</div>
          </div>
          <div className={styles.user}>
            <div>
              <img
                src='https://bestprofilepictures.com/wp-content/uploads/2021/06/Anonymous-Profile-Pic-1.jpg'
                alt=''
                className={styles.avatar}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>Malshan Perera</div>
              <div className={styles.email}>malshanperera@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
