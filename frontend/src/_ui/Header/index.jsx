import React from 'react';
import cx from 'classnames';
import { Breadcrumbs } from '../Breadcrumbs';
import { useLocation } from 'react-router-dom';

function Header() {
  const currentVersion = localStorage.getItem('currentVersion');
  const darkMode = localStorage.getItem('darkMode') === 'true';

  const routes = (path) => {
    switch (path) {
      case 'workspaceId':
        return '程序列表';
      case 'database':
        return '数据表';
      case 'workspace-settings':
        return '工作区设置';
      case 'global-datasources':
        return '数据源';
      case 'settings':
        return '配置文件设置';
      case 'integrations':
        return '集成';
      default:
        return '程序列表';
    }
  };
  const location = useLocation();

  return (
    <header className="layout-header">
      <div className="row w-100 gx-0">
        <div className="tj-dashboard-section-header" data-cy="workspace-selector">
          <p className="tj-text-md font-weight-500">{routes(location?.pathname.split('/').pop())}</p>
        </div>
        <div className="col tj-dashboard-header-wrap">
          <div className="d-flex justify-content-sm-between">
            <div className="app-header-label" data-cy="app-header-label">
              <Breadcrumbs darkMode={darkMode} />
            </div>
            <div
              className={cx('ms-auto tj-version tj-text-xsm', {
                'color-muted-darkmode': darkMode,
                'color-disabled': !darkMode,
              })}
              data-cy="version-label"
            >
              版本 {currentVersion}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
