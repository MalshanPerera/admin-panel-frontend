import { useState } from 'react';

import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import styles from './DataTable.module.scss';
import { Link, useLocation } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const location = useLocation();

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 300,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div className={styles.cellAction}>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.dataTable}>
      <div className={styles.buttonContainer}>
        <></>
        <button className={styles.addUserButton}>
          <Link
            to={`${location.pathname}/new`}
            style={{ textDecoration: 'none' }}
            className={styles.link}
          >
            {location.pathname === '/users'
              ? 'Add New User'
              : 'Add New Product'}
            <AddCircleOutlineRoundedIcon className={styles.icon} />
          </Link>
        </button>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
