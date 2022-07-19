import PeopleIcon from '@mui/icons-material/People';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
// import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import { CardType } from '../../helpers/enums';

import styles from './Card.module.scss';

interface CardPropsInterface {
  type: CardType;
}

const Card = ({ type }: CardPropsInterface) => {
  let data;

  // TODO: Get data from API and set it to data variable
  const amount = 100;
  const diff = 20;

  switch (type) {
    case CardType.User:
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PeopleIcon
            className={styles.icon}
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case CardType.Order:
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartRoundedIcon
            className={styles.icon}
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case CardType.Earnings:
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'See all earnings',
        icon: (
          <MonetizationOnRoundedIcon
            className={styles.icon}
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case CardType.Balance:
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See all details',
        icon: (
          <AccountBalanceWalletRoundedIcon
            className={styles.icon}
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles.card}>
      <div className={styles.leading}>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.counter}>
          {data?.isMoney && '$'} {amount}
        </div>
        <div className={styles.link}>{data?.link}</div>
      </div>
      <div className={styles.trailing}>
        <div className={`${styles.percentage} ${styles.positive}`}>
          <KeyboardArrowUpRoundedIcon />
          {diff}%
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Card;
