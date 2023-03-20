import React from 'react';
import cx from 'classnames';
import Select from '@/_ui/Select';
import AddColumnIcon from '../Icons/AddColumnIcon.svg';
import DeleteIcon from '../Icons/DeleteIcon.svg';
import { dataTypes, primaryKeydataTypes } from '../constants';

const ColumnsForm = ({ columns, setColumns }) => {
  const handleDelete = (index) => {
    const newColumns = { ...columns };
    delete newColumns[index];
    setColumns(newColumns);
  };

  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title" data-cy="add-columns-header">
        添加列
        </h3>
      </div>
      <div className="card-body">
        <div
          className={cx('list-group-item', {
            'text-white': darkMode,
          })}
        >
          <div className="row align-items-center">
            <div className="col-3 m-0">
              <span data-cy="name-input-field-label">列名</span>
            </div>
            <div className="col-3 m-0">
              <span data-cy="type-input-field-label">类型</span>
            </div>
            <div className="col-3 m-0">
              <span data-cy="default-input-field-label">默认值</span>
            </div>
          </div>
        </div>
        {Object.keys(columns).map((index) => (
          <div
            key={index}
            className={cx('list-group-item', {
              'bg-gray': !darkMode,
            })}
          >
            <div className="row align-items-center">
              {/* <div className="col-1">
                  <DragIcon />
                </div> */}
              <div className="col-3 m-0" data-cy="column-name-input-field">
                <input
                  onChange={(e) => {
                    e.persist();
                    const prevColumns = { ...columns };
                    prevColumns[index].column_name = e.target.value;
                    setColumns(prevColumns);
                  }}
                  value={columns[index].column_name}
                  type="text"
                  className="form-control"
                  placeholder="输入列名"
                  data-cy={`name-input-field-${columns[index].column_name}`}
                  disabled={columns[index].constraint === 'PRIMARY KEY'}
                />
              </div>
              <div className="col-3 m-0" data-cy="type-dropdown-field">
                <Select
                  width={'100%'}
                  isDisabled={columns[index].constraint === 'PRIMARY KEY'}
                  useMenuPortal={false}
                  options={columns[index].constraint === 'PRIMARY KEY' ? primaryKeydataTypes : dataTypes}
                  value={columns[index].data_type}
                  onChange={(value) => {
                    const prevColumns = { ...columns };
                    prevColumns[index].data_type = value;
                    setColumns(prevColumns);

                  }}
                />
              </div>
              <div className="col-3 m-0" data-cy="column-default-input-field">
                <input
                  onChange={(e) => {
                    e.persist();
                    const prevColumns = { ...columns };
                    prevColumns[index].default = e.target.value;
                    setColumns(prevColumns);
                  }}
                  value={columns[index].default}
                  type="text"
                  className="form-control"
                  data-cy="default-input-field"
                  placeholder="空值"
                  disabled={columns[index].constraint === 'PRIMARY KEY' || columns[index].data_type === 'serial'}
                />
              </div>
              {columns[index].constraint === 'PRIMARY KEY' && (
                <div className="col-2">
                  <span
                    className={`badge badge-outline ${darkMode ? 'text-white' : 'text-indigo'}`}
                    data-cy="primary-key-text"
                  >
                    主键
                  </span>
                </div>
              )}
              <div className="col-1 cursor-pointer" data-cy="column-delete-icon" onClick={() => handleDelete(index)}>
                {columns[index].constraint !== 'PRIMARY KEY' && <DeleteIcon />}
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() =>
            setColumns((prevColumns) => ({ ...prevColumns, [+Object.keys(prevColumns).pop() + 1 || 0]: {} }))
          }
          className="mt-2 btn border-0 card-footer add-more-columns-btn"
          data-cy="add-more-columns-button"
        >
          <AddColumnIcon />
          &nbsp;&nbsp; 添加列
        </div>
      </div>
    </div>
  );
};

export default ColumnsForm;
