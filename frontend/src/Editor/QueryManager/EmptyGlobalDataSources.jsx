import React from 'react';
import InfoIcon from '../../../assets/images/icons/info.svg';
import AddGlobalDataSourceButton from './AddGlobalDataSourceButton';

const EmptyGlobalDataSources = ({ darkMode }) => {
  return (
    <div className={`empty-gds-container ${darkMode && 'theme-dark'}`}>
      <div className="info-container">
        <div className="icon-container">
          <InfoIcon />
        </div>
        <div className="info">
          尚未添加全局数据源.
          <br />
          添加新的数据源以将其连接到您的应用程序
        </div>
      </div>
      <AddGlobalDataSourceButton />
    </div>
  );
};

export default EmptyGlobalDataSources;
