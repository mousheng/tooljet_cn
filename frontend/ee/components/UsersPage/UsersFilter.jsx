import React, { useEffect, useState } from 'react';
import Select from '@/_ui/Select';
import { debounce } from 'lodash';

const userStatusOptions = [
  { name: '全部', value: '' },
  { name: '激活', value: 'active' },
  { name: '邀请', value: 'invited' },
  { name: '已归档', value: 'archived' },
];

const UsersFilter = ({ filterList }) => {
  const [options, setOptions] = useState({ searchText: '', status: '' });
  const [statusVal, setStatusVal] = useState('');
  const [queryVal, setQueryVal] = useState();

  const statusValuesChanged = (event) => {
    let newOptions = {};
    newOptions = {
      ...options,
      searchText: queryVal,
      status: event,
    };
    setOptions(newOptions);
  };

  const queryValuesChanged = (event) => {
    let newOptions = {};
    newOptions = {
      ...options,
      status: statusVal,
      searchText: event.target.value,
    };
    setOptions(newOptions);
  };
  useEffect(() => {
    const debouncedFilter = debounce(() => {
      filterList(options);
    }, 500);

    debouncedFilter();
    return debouncedFilter.cancel;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.searchText, options.status]);

  return (
    <div className="workspace-settings-table-wrap workspace-settings-filter-wrap">
      <div className="row workspace-settings-filters">
        <div
          className="workspace-settings-filter-items d-flex align-items-center "
          data-cy="user-status-select-continer"
        >
          <div className="tj-text-xsm mx-3">显示</div>
          <div className="users-filter-dropdown">
            <Select
              options={userStatusOptions}
              value={options.status}
              onChange={(value) => {
                statusValuesChanged(value);
                setStatusVal(value);
              }}
              height="32px"
              useMenuPortal={true}
              closeMenuOnSelect={true}
              customWrap={true}
              width="161.25px"
            />
          </div>
        </div>
        <div className="workspace-settings-filter-items workspace-clear-filter-wrap">
          <div className="d-flex align-items-center cursor-pointer tj-app-input">
            <input
              type="text"
              className="user-filter-search"
              placeholder="按姓名或电子邮件搜索用户"
              onChange={(e) => {
                setQueryVal(e.target.value);
                queryValuesChanged(e);
              }}
            />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default UsersFilter;
