import React, { useContext } from 'react';
import { GlobalDataSourcesContext } from '../index';
import { List } from '../List';

export const CreateDataSourceModal = () => {
  const { handleModalVisibility, setEditing } = useContext(GlobalDataSourcesContext);

  return (
    <div className="col border-end">
      <div className="p-3">
        <button
          className="add-datasource-btn btn btn-primary active w-100"
          type="button"
          onClick={() => {
            handleModalVisibility();
            setEditing(false);
          }}
        >
          添加新的数据源
        </button>
      </div>
      <List />
    </div>
  );
};
