import React, { useContext, useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import { Sidebar } from '../Sidebar';
import { GlobalDataSourcesContext } from '..';
import { DataSourceManager } from '../../Editor/DataSourceManager';
import DataSourceFolder from '@assets/images/icons/datasource-folder.svg';

export const GlobalDataSourcesPage = ({ darkMode }) => {
  const containerRef = useRef(null);
  const [modalProps, setModalProps] = useState({
    backdrop: false,
    dialogClassName: 'datasource-edit-modal',
    enforceFocus: false,
  });

  const {
    dataSources,
    setSelectedDataSource,
    selectedDataSource,
    fetchDataSources,
    showDataSourceManagerModal,
    toggleDataSourceManagerModal,
    handleModalVisibility,
    isEditing,
    setEditing,
  } = useContext(GlobalDataSourcesContext);

  useEffect(() => {
    if (selectedDataSource) {
      setModalProps({ ...modalProps, backdrop: false });
    }

    if (!isEditing) {
      setModalProps({ ...modalProps, backdrop: true });
    }
  }, [selectedDataSource, isEditing]);

  const handleHideModal = () => {
    if (dataSources?.length) {
      if (!isEditing) {
        setEditing(true);
        setSelectedDataSource(dataSources[0]);
      } else {
        setSelectedDataSource(null);
        setEditing(true);
        toggleDataSourceManagerModal(false);
      }
    } else {
      handleModalVisibility();
    }
  };

  return (
    <div className="row gx-0">
      <Sidebar />
      <div
        ref={containerRef}
        className={cx('col animation-fade datasource-modal-container', {
          'bg-light-gray': !darkMode,
        })}
      >
        {containerRef && containerRef?.current && (
          <DataSourceManager
            showBackButton={selectedDataSource ? false : true}
            showDataSourceManagerModal={showDataSourceManagerModal}
            darkMode={darkMode}
            hideModal={handleHideModal}
            scope="global"
            dataSourcesChanged={fetchDataSources}
            selectedDataSource={selectedDataSource}
            modalProps={modalProps}
            container={selectedDataSource ? containerRef?.current : null}
          />
        )}
        {!selectedDataSource && isEditing && (
          <div className="main-empty-container">
            <div className="icon-container">
              <DataSourceFolder />
            </div>
            <div className="heading tj-text-lg mt-2">全局数据源</div>
            <div className="sub-heading text-secondary tj-text-md mt-2">
            将您的应用程序与REST API、PGSQL、MongoDB、Stripe和40多个其他数据源连接
            </div>
            <button
              className="add-datasource-btn btn btn-primary active w-100 mt-3"
              type="button"
              onClick={() => {
                handleModalVisibility();
                setEditing(false);
              }}
            >
              添加新的数据源
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
