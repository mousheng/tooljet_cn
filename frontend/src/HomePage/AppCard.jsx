import React, { useState, useCallback, useEffect } from 'react';
import cx from 'classnames';
import { AppMenu } from './AppMenu';
import moment from 'moment';
import { ToolTip } from '@/_components';
import useHover from '@/_hooks/useHover';
import configs from './Configs/AppIcon.json';
import { Link, useNavigate } from 'react-router-dom';
import urlJoin from 'url-join';
import { useTranslation } from 'react-i18next';
import SolidIcon from '@/_ui/Icon/SolidIcons';
import BulkIcon from '@/_ui/Icon/BulkIcons';

import { getPrivateRoute } from '@/_helpers/routes';
const { defaultIcon } = configs;

// 设置语言环境
moment.locale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MM月DD日',
    LLL: 'YYYY年MM月DD日Ah点mm分',
    LLLL: 'YYYY年MM月DD日ddddAh点mm分',
    l: 'YYYY-M-D',
    ll: 'YYYY年M月D日',
    lll: 'YYYY年M月D日 HH:mm',
    llll: 'YYYY年M月D日dddd HH:mm',
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
      return hour;
    } else if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function (hour, minute, isLower) {
    const hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  calendar: {
    sameDay: '[今天]LT',
    nextDay: '[明天]LT',
    nextWeek: '[下]ddddLT',
    lastDay: '[昨天]LT',
    lastWeek: '[上]ddddLT',
    sameElse: 'L',
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '周';
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    ss: '%d秒',
    m: '1分钟',
    mm: '%d分钟',
    h: '1小时',
    hh: '%d小时',
    d: '1天',
    dd: '%d天',
    M: '1个月',
    MM: '%d个月',
    y: '1年',
    yy: '%d年',
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
});

export default function AppCard({
  app,
  canCreateApp,
  canDeleteApp,
  deleteApp,
  cloneApp,
  exportApp,
  appActionModal,
  canUpdateApp,
  currentFolder,
}) {
  const canUpdate = canUpdateApp(app);
  const [hoverRef, isHovered] = useHover();
  const [focused, setFocused] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onMenuToggle = useCallback(
    (status) => {
      setMenuOpen(!!status);
      !status && !isHovered && setFocused(false);
    },
    [isHovered]
  );

  const appActionModalCallBack = useCallback(
    (action) => {
      appActionModal(app, currentFolder, action);
    },
    [app, appActionModal, currentFolder]
  );

  useEffect(() => {
    !isMenuOpen && setFocused(!!isHovered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const updated_at = app?.editing_version?.updated_at || app?.updated_at;
  const updated = moment(updated_at).locale('zh-CN').fromNow(true);
  const darkMode = localStorage.getItem('darkMode') === 'true';

  let AppIcon;
  try {
    AppIcon = <BulkIcon fill={'#3E63DD'} name={app?.icon || defaultIcon} />;
  } catch (e) {
    console.error('App icon not found', app.icon);
  }

  return (
    <div className="card homepage-app-card animation-fade">
      <div key={app.id} ref={hoverRef} data-cy={`${app.name.toLowerCase().replace(/\s+/g, '-')}-card`}>
        <div className="row home-app-card-header">
          <div className="col-12 d-flex justify-content-between">
            <div>
              <div className="app-icon-main">
                <div className="app-icon d-flex" data-cy={`app-card-${app.icon}-icon`}>
                  {AppIcon && AppIcon}
                </div>
              </div>
            </div>
            <div visible={focused}>
              {(canCreateApp(app) || canDeleteApp(app)) && (
                <AppMenu
                  onMenuOpen={onMenuToggle}
                  openAppActionModal={appActionModalCallBack}
                  canCreateApp={canCreateApp()}
                  canDeleteApp={canDeleteApp(app)}
                  canUpdateApp={canUpdateApp(app)}
                  deleteApp={() => deleteApp(app)}
                  cloneApp={() => cloneApp(app)}
                  exportApp={() => exportApp(app)}
                  isMenuOpen={isMenuOpen}
                  darkMode={darkMode}
                  currentFolder={currentFolder}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <ToolTip message={app.name}>
            <h3
              className="app-card-name font-weight-500 tj-text-md"
              data-cy={`${app.name.toLowerCase().replace(/\s+/g, '-')}-title`}
            >
              {app.name}
            </h3>
          </ToolTip>
        </div>
        <div className="app-creation-time-container" style={{ marginBottom: '12px' }}>
          {canUpdate && (
            <div className="app-creation-time tj-text-xsm" data-cy="app-creation-details">
              {`${app.user?.first_name ? app.user.first_name : ''} ${app.user?.last_name ? app.user.last_name : ''}`}
              <ToolTip
                message={
                  app.created_at && moment(app.created_at).locale('zh-CN').format('创建于YY年M月D日 h:mm:ss')
                }
              >
                <span>{updated === 'just now' ? `编辑于 ${updated}` : `编辑于 ${updated} 之前`}</span>
              </ToolTip>
            </div>
          )}
        </div>
        <div className="appcard-buttons-wrap">
          {canUpdate && (
            <div>
              <ToolTip message="应用生成器内打开">
                <Link
                  to={getPrivateRoute('editor', {
                    id: app.id,
                  })}
                >
                  <button type="button" className="tj-primary-btn edit-button tj-text-xsm" data-cy="edit-button">
                    <SolidIcon name="editrectangle" width="14" fill={darkMode ? '#11181C' : '#FDFDFE'} />
                    &nbsp;{t('globals.edit', 'Edit')}
                  </button>
                </Link>
              </ToolTip>
            </div>
          )}
          <div>
            <ToolTip
              message={
                app?.current_version_id === null
                  ? t('homePage.appCard.noDeployedVersion', 'App does not have a deployed version')
                  : t('homePage.appCard.openInAppViewer', 'Open in app viewer')
              }
            >
              <button
                type="button"
                className={cx(
                  ` launch-button tj-text-xsm ${
                    app?.current_version_id === null || app?.is_maintenance_on ? 'tj-disabled-btn ' : 'tj-tertiary-btn'
                  }`
                )}
                onClick={() => {
                  if (app?.current_version_id) {
                    window.open(urlJoin(window.public_config?.TOOLJET_HOST, `/applications/${app.slug}`));
                  } else {
                    navigate(app?.current_version_id ? `/applications/${app.slug}` : '');
                  }
                }}
                data-cy="launch-button"
              >
                <SolidIcon
                  name="rightarrrow"
                  width="14"
                  fill={
                    app?.current_version_id === null || app?.is_maintenance_on
                      ? '#4C5155'
                      : darkMode
                      ? '#FDFDFE'
                      : '#11181C'
                  }
                />

                {app?.is_maintenance_on
                  ? t('homePage.appCard.maintenance', 'Maintenance')
                  : t('homePage.appCard.launch', 'Launch')}
              </button>
            </ToolTip>
          </div>
        </div>
      </div>
    </div>
  );
}
