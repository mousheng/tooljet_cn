export const ActionTypes = [
  {
    name: '显示提醒',
    id: 'show-alert',
    options: [{ name: 'message', type: 'text', default: 'Message !' }],
  },
  {
    name: '注销当前账号',
    id: 'logout',
  },
  {
    name: '运行查询',
    id: 'run-query',
    options: [{ queryId: '' }],
  },
  {
    name: '打开网页',
    id: 'open-webpage',
    options: [{ name: 'url', type: 'text', default: 'https://example.com' }],
  },
  {
    name: '跳转到App',
    id: 'go-to-app',
    options: [
      { name: 'app', type: 'text', default: '' },
      { name: 'queryParams', type: 'code', default: '[]' },
    ],
  },
  {
    name: '显示弹窗',
    id: 'show-modal',
    options: [{ name: 'modal', type: 'text', default: '' }],
  },
  {
    name: '关闭弹窗',
    id: 'close-modal',
    options: [{ name: 'modal', type: 'text', default: '' }],
  },
  {
    name: '复制到剪贴板',
    id: 'copy-to-clipboard',
    options: [{ name: 'copy-to-clipboard', type: 'text', default: '' }],
  },
  {
    name: '设置本地存储',
    id: 'set-localstorage-value',
    options: [
      { name: 'key', type: 'code', default: '' },
      { name: 'value', type: 'code', default: '' },
    ],
  },
  {
    name: '生成文件',
    id: 'generate-file',
    options: [
      { name: 'fileType', type: 'text', default: '' },
      { name: 'fileName', type: 'text', default: '' },
      { name: 'data', type: 'code', default: '{{[]}}' },
    ],
  },
  {
    name: '设置表格页码',
    id: 'set-table-page',
    options: [
      {
        name: 'table',
        type: 'text',
        default: '',
      },
      { name: 'pageIndex', type: 'text', default: '{{1}}' },
    ],
  },
  {
    name: '设置变量',
    id: 'set-custom-variable',
    options: [
      { name: 'key', type: 'code', default: '' },
      { name: 'value', type: 'code', default: '' },
    ],
  },
  {
    name: '删除变量',
    id: 'unset-custom-variable',
    options: [{ name: 'key', type: 'code', default: '' }],
  },
  {
    name: '切换页面',
    id: 'switch-page',
    options: [{ name: 'page', type: 'text', default: '' }],
  },
  {
    name: '设置页面变量',
    id: 'set-page-variable',
    options: [
      { name: 'key', type: 'code', default: '' },
      { name: 'value', type: 'code', default: '' },
    ],
  },
  {
    name: '删除页面变量',
    id: 'unset-page-variable',
    options: [
      { name: 'key', type: 'code', default: '' },
      { name: 'value', type: 'code', default: '' },
    ],
  },
  {
    name: '控制组件',
    id: 'control-component',
    options: [
      { name: 'component', type: 'text', default: '' },
      { name: 'action', type: 'text', default: '' },
    ],
  },
];
