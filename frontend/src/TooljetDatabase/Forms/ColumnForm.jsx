import React, { useState, useContext } from 'react';
import Select from '@/_ui/Select';
import DrawerFooter from '@/_ui/Drawer/DrawerFooter';
import { isEmpty } from 'lodash';
import { toast } from 'react-hot-toast';
import { tooljetDatabaseService } from '@/_services';
import { TooljetDatabaseContext } from '../index';
import { dataTypes } from '../constants';

const ColumnForm = ({ onCreate, onClose }) => {
  const [columnName, setColumnName] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [dataType, setDataType] = useState();
  const [fetching, setFetching] = useState(false);
  const { organizationId, selectedTable } = useContext(TooljetDatabaseContext);

  const handleTypeChange = (value) => {
    setDataType(value);
  };

  const handleCreate = async () => {
    if (isEmpty(columnName)) {
      toast.error('列名不能为空');
      return;
    }
    if (isEmpty(dataType)) {
      toast.error('数据类型不能为空');
      return;
    }

    setFetching(true);

    const { error } = await tooljetDatabaseService.createColumn(
      organizationId,
      selectedTable,
      columnName,
      dataType,
      defaultValue
    );

    setFetching(false);

    if (error) {
      toast.error(error?.message ?? `未能在表"${selectedTable}"中创建新列`);
      return;
    }

    toast.success(`已成功创建列`);
    onCreate && onCreate();
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title" data-cy="create-new-column-header">
        创建新列
        </h3>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <div className="form-label" data-cy="column-name-input-field-label">
            列名
          </div>
          <input
            value={columnName}
            type="text"
            placeholder="输入列名"
            className="form-control"
            data-cy="column-name-input-field"
            autoComplete="off"
            onChange={(e) => setColumnName(e.target.value)}
          />
        </div>
        <div className="mb-3" data-cy="data-type-dropdown-section">
          <div className="form-label" data-cy="data-type-input-field-label">
            数据类型
          </div>
          <Select
            useMenuPortal={false}
            placeholder="选择数据类型"
            value={dataType}
            options={dataTypes}
            onChange={handleTypeChange}
          />
        </div>
        <div className="mb-3">
          <div className="form-label" data-cy="default-value-input-field-label">
            默认值
          </div>
          <input
            value={defaultValue}
            type="text"
            placeholder="输入默认值"
            className="form-control"
            data-cy="default-value-input-field"
            autoComplete="off"
            onChange={(e) => setDefaultValue(e.target.value)}
            disabled={dataType === 'serial'}
          />
        </div>
      </div>
      <DrawerFooter fetching={fetching} onClose={onClose} onCreate={handleCreate} />
    </div>
  );
};

export default ColumnForm;
