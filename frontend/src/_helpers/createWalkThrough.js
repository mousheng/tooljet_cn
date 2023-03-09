import * as Driver from 'driver.js';
import { addToLocalStorage, getDataFromLocalStorage } from '@/_helpers/appUtils';
import 'driver.js/dist/driver.min.css';

export const initEditorWalkThrough = () => {
  if (
    getDataFromLocalStorage('walkthroughCompleted') == undefined ||
    !getDataFromLocalStorage('walkthroughCompleted')
  ) {
    const darkMode = getDataFromLocalStorage('darkMode') === 'true';
    const driver = new Driver({
      allowClose: true,
      closeBtnText: '跳过',
      nextBtnText: '下一条',
      prevBtnText: '上一条',
      padding: 2,
      onReset: () => {
        // Here we need to write the logic to update walkthroughCompleted column of the current user.
        addToLocalStorage({ key: 'walkthroughCompleted', value: true });
      },
      className: `${darkMode ? 'dark-theme' : 'light-theme'}-walkthrough`,
    });

    driver.defineSteps([
      {
        element: '.component-image-holder',
        popover: {
          title: '拖放控件',
          description: '从侧边栏将组件拖放到画布.',
          position: 'left',
          closeBtnText: '跳过 (1/6)',
        },
      },
      {
        element: '.sidebar-datasources',
        popover: {
          title: '连接到数据源',
          description: '您可以在此处管理数据源.',
          position: 'right',
          closeBtnText: '跳过 (2/6)',
        },
      },
      {
        element: '.left-sidebar-inspector',
        popover: {
          title: '检查器',
          description: '检查器能为您检查组件的属性、查询结果等',
          position: 'right',
          closeBtnText: '跳过 (3/6)',
        },
      },
      {
        element: '.queries-header ',
        popover: {
          title: '创建查询',
          description: '可与数据源进行交互，运行JavaScript片段，发出 API 请求',
          position: 'top',
          closeBtnText: '跳过 (4/6)',
        },
      },
      {
        element: '.release-buttons',
        popover: {
          title: '预览、发布和共享',
          description:
            '单击预览可立即查看当前修改。单击共享按钮可修改共享选项。发布版本可使更改生效。已发布的版本无法修改，您必须创建新版本才能进行更改。',
          position: 'bottom',
          closeBtnText: '跳过 (5/6)',
        },
      },
      {
        element: '.sidebar-comments',
        popover: {
          title: '合作',
          description: '在画布上添加评论并标记您的团队成员以进行协作.',
          position: 'right',
          closeBtnText: '跳过 (6/6)',
        },
      },
    ]);

    driver.start();
  }
};
