import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './TransactionTable.module.scss';

const TransactionTable = () => {
  function createData(
    id: number,
    product: string,
    img: string,
    customer: string,
    date: string,
    amount: number,
    method: string,
    status: string
  ) {
    return { id, product, img, customer, date, amount, method, status };
  }

  const rows = [
    createData(
      112312,
      'Acer Nitro 5',
      'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      'John Smith',
      '1 March',
      785.0,
      'Cash on Delivery',
      'Approved'
    ),
    createData(
      234355,
      'Playstation 5',
      'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
      'Michael Doe',
      '1 March',
      785.0,
      'Online Payment',
      'Approved'
    ),
    createData(
      365745,
      'Redragon S101',
      'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
      'John Smith',
      '1 March',
      35.0,
      'Cash on Delivery',
      'Pending'
    ),
    createData(
      443566,
      'Razer Blade 15',
      'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
      'Jane Smith',
      '1 March',
      920.0,
      'Online Payment',
      'Approved'
    ),
    createData(
      536345,
      'ASUS ROG Strix',
      'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
      'Harold Carol',
      '1 March',
      2000.0,
      'Online Payment',
      'Pending'
    ),
  ];

  return (
    <div className={styles.table}>
      <div className={styles.title}>Latest Transaction</div>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCell}>Tracking ID</TableCell>
              <TableCell className={styles.tableCell}>Product</TableCell>
              <TableCell className={styles.tableCell}>Customer</TableCell>
              <TableCell className={styles.tableCell}>Date</TableCell>
              <TableCell className={styles.tableCell}>Amount</TableCell>
              <TableCell className={styles.tableCell}>Payment Method</TableCell>
              <TableCell className={styles.tableCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className='tableCell'>{row.id}</TableCell>
                <TableCell className='tableCell'>
                  <div className={styles.cellWrapper}>
                    <img src={row.img} alt='' className={styles.image} />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className='tableCell'>{row.customer}</TableCell>
                <TableCell className='tableCell'>{row.date}</TableCell>
                <TableCell className='tableCell'>{row.amount}</TableCell>
                <TableCell className='tableCell'>{row.method}</TableCell>
                <TableCell className='tableCell'>
                  <span
                    className={`${styles.status} ${
                      row.status === 'Approved'
                        ? styles.Approved
                        : styles.Pending
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
