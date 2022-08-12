import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import styles from './New.module.scss';

interface NewProps {
  title: string;
  inputs: {
    id: number;
    label: string;
    type: string;
    placeholder?: string;
  }[];
}

const New = ({ title, inputs }: NewProps) => {
  const [file, setFile] = useState<File>(new File([], ''));

  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles.newContainer}>
        <Navbar />
        <div className={styles.top}>
          <h1>{title}</h1>
        </div>
        <div className={styles.bottom}>
          <img
            src={
              file.name !== ''
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt=''
          />
          <form>
            <div className={styles.formInput}>
              <label className={styles.addImage} htmlFor='file'>
                Image <DriveFolderUploadOutlinedIcon className={styles.icon} />
              </label>
              <input
                type='file'
                id='file'
                onChange={(e) => setFile(e.target.files![0])}
                style={{ display: 'none' }}
              />
            </div>

            {inputs.map((input) => (
              <div className={styles.formInput} key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
