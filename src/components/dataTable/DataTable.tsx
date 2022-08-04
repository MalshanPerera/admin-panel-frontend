import { useState } from 'react';

import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import styles from './DataTable.module.scss';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState(userRows);

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
