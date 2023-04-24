import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SolidIcon from '../Icon/SolidIcons';
import { BreadCrumbContext } from '../../App/App';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
// 中文映射列表
const breadOfChinese = {
  '程序列表': '程序列表',
  'Database': '数据库',
  'Workspace settings': '工作区设置',
  'Global datasources': '全局数据源',
  'Integrations / plugins':'集成/插件',
  'All apps':'全部应用',
  'Users & permissions':'用户&权限',
  'Settings':'设置'
}
export const Breadcrumbs = ({ darkMode }) => {
  const { sidebarNav } = useContext(BreadCrumbContext);
  const breadcrumbs = useBreadcrumbs(routes, { excludePaths: ['/'] });
  return (
    <ol className="breadcrumb breadcrumb-arrows">
      {breadcrumbs.map(({ breadcrumb, dataCy, beta }, i) => {
        if (i == 1 || breadcrumbs?.length == 1) {
          return (
            <div key={breadcrumb.key} className="tj-dashboard-header-title-wrap" data-cy={dataCy ?? ''}>
              {/* 面包屑中文映射 */}
              <p className=" tj-text-xsm ">{breadcrumb?.props.children in breadOfChinese?breadOfChinese[breadcrumb.props.children]:breadcrumb}</p>
              {sidebarNav?.length > 0 && <SolidIcon name="cheveronright" fill={darkMode ? '#FDFDFE' : '#131620'} />}
              <li className="breadcrumb-item font-weight-500">
                <Link to={breadcrumb.key}> {sidebarNav in breadOfChinese?breadOfChinese[sidebarNav]:sidebarNav}</Link>
              </li>
              {beta && <span className="badge bg-color-primary mx-3">beta</span>}
            </div>
          );
        }
      })}
    </ol>
  );
};
// define some custom breadcrumbs for certain routes (optional)
const routes = [
  { path: '/:worspace_id', breadcrumb: '程序列表' },
  { path: '/database', breadcrumb: '数据表', props: { dataCy: 'tables-page-header' } },
  { path: '/workspace-settings', breadcrumb: '工作区设置' },
  { path: '/global-datasources', breadcrumb: '全局数据源' },
  { path: '/integrations', breadcrumb: 'Integrations / plugins', props: { beta: true } },
];
