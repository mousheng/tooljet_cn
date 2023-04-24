import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import DrawerFooter from '@/_ui/Drawer/DrawerFooter';
import CreateColumnsForm from './ColumnsForm';
import { tooljetDatabaseService } from '@/_services';
import { TooljetDatabaseContext } from '../index';
import { isEmpty } from 'lodash';

const TableForm = ({
  selectedTable = '',
  selectedColumns = { 0: { column_name: 'id', data_type: 'serial', constraint: 'PRIMARY KEY' } },
  onCreate,
  onEdit,
  onClose,
}) => {
  const [fetching, setFetching] = useState(false);
  const [tableName, setTableName] = useState(selectedTable);
  const [columns, setColumns] = useState(selectedColumns);
  const { organizationId } = useContext(TooljetDatabaseContext);
  const isEditMode = !isEmpty(selectedTable);

  const validateTableName = () => {
    if (isEmpty(tableName)) {
      toast.error('表名不能为空');
      return false;
    }

    if (tableName.length > 255) {
      toast.error('表名不能超过255个字符');
      return false;
    }

    const tableNameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    if (!tableNameRegex.test(tableName)) {
      toast.error('表名只能包含字母、数字和下划线');
      return false;
    }

    return true;
  };

  const handleCreate = async () => {
    if (!validateTableName()) return;

    const columnNames = Object.values(columns).map((column) => column.column_name);
    if (columnNames.some((columnName) => isEmpty(columnName))) {
      toast.error('列名不能为空');
      return;
    }

    setFetching(true);
    const { error } = await tooljetDatabaseService.createTable(organizationId, tableName, Object.values(columns));
    setFetching(false);
    if (error) {
      toast.error(error?.message ?? `无法创建新表 "${tableName}"`);
      return;
    }

    toast.success(`表 ${tableName} 已创建成功`);
    onCreate && onCreate(tableName);
  };

  const handleEdit = async () => {
    if (!validateTableName()) return;

    setFetching(true);
    const { error } = await tooljetDatabaseService.renameTable(organizationId, selectedTable, tableName);
    setFetching(false);

    if (error) {
      toast.error(error?.message ?? `无法编辑表 "${tableName}"`);
      return;
    }

    toast.success(`${tableName} 已成功编辑`);
    onEdit && onEdit();
  };

  return (
    <div className="drawer-card-wrapper">
      <div className="card-header">
        {!isEditMode && (
          <h3 className="card-title" data-cy="create-new-table-header">
          创建新表
          </h3>
        )}
        {isEditMode && (
          <h3 className="card-title" data-cy="edit-table-header">
            编辑表
          </h3>
        )}
      </div>
      <div>
        <div className="card-body">
          <div className="mb-3">
            <div className="form-label" data-cy="table-name-label">
            表名
            </div>
            <div className="tj-app-input">
              <input
                type="text"
                placeholder="输入表名"
                name="table-name"
                className="form-control"
                data-cy="table-name-input-field"
                autoComplete="off"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
                autoFocus
              />
            </div>
          </div>
        </div>
        {!isEditMode && <CreateColumnsForm columns={columns} setColumns={setColumns} />}
        <DrawerFooter
          fetching={fetching}
          isEditMode={isEditMode}
          onClose={onClose}
          onEdit={handleEdit}
          onCreate={handleCreate}
        />
      </div>
    </div>
  );
};

export default TableForm;
