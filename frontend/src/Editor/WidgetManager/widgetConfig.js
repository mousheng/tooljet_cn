export const widgets = [
  {
    name: 'Table',
    displayName: '表格',
    description: '显示分页的表格数据',
    component: 'Table',
    properties: {
      title: {
        type: 'string',
        displayName: 'Title',
        validation: {
          schema: { type: 'string' },
        },
      },
      data: {
        type: 'code',
        displayName: 'Table data',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'object' },
            optional: true,
          },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading state',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      columns: {
        type: 'array',
        displayName: 'Table Columns',
        // validation: {
        //   schema: {
        //     type: 'array',
        //     element: {
        //       type: 'union',
        //       schemas: [
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             textWrap: { type: 'string' },
        //             key: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             textColor: { type: 'string' },
        //             regex: { type: 'string' },
        //             minLength: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             maxLength: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             customRule: { type: 'string' },
        //           },
        //         },
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             key: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //           },
        //           isEditable: { type: 'boolean' },
        //         },
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             activeColor: { type: 'string' },
        //             isEditable: { type: 'boolean' },
        //           },
        //         },
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             key: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             values: {
        //               type: 'union',
        //               schemas: [
        //                 { type: 'array', element: { type: 'string' } },
        //                 { type: 'array', element: { type: 'number' } },
        //               ],
        //             },
        //             labels: {
        //               type: 'union',
        //               schemas: [
        //                 { type: 'array', element: { type: 'string' } },
        //                 { type: 'array', element: { type: 'number' } },
        //               ],
        //             },
        //           },
        //           isEditable: { type: 'boolean' },
        //         },
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             key: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             values: {
        //               type: 'union',
        //               schemas: [
        //                 { type: 'array', element: { type: 'string' } },
        //                 { type: 'array', element: { type: 'number' } },
        //               ],
        //             },
        //             labels: {
        //               type: 'union',
        //               schemas: [
        //                 { type: 'array', element: { type: 'string' } },
        //                 { type: 'array', element: { type: 'number' } },
        //               ],
        //             },
        //           },
        //           isEditable: { type: 'boolean' },
        //         },
        //         {
        //           type: 'object',
        //           object: {
        //             columnType: { type: 'string' },
        //             name: { type: 'string' },
        //             key: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        //             dateFormat: { type: 'string' },
        //             parseDateFormat: { type: 'string' },
        //             isTimeChecked: { type: 'boolean' },
        //             isEditable: { type: 'boolean' },
        //           },
        //         },
        //       ],
        //     },
        //   },
        // },
      },
      useDynamicColumn: {
        type: 'toggle',
        displayName: '使用动态列',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      columnData: {
        type: 'code',
        displayName: '列数据',
      },
      rowsPerPage: {
        type: 'code',
        displayName: '每页行数',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      serverSidePagination: {
        type: 'toggle',
        displayName: '服务器端分页',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enableNextButton: {
        type: 'toggle',
        displayName: '启用下一页按钮',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enabledSort: {
        type: 'toggle',
        displayName: '启用排序',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      hideColumnSelectorButton: {
        type: 'toggle',
        displayName: 'Hide column selector button',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enablePrevButton: {
        type: 'toggle',
        displayName: '启用上一页按钮',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      totalRecords: {
        type: 'code',
        displayName: '服务器端总记录数',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      clientSidePagination: {
        type: 'toggle',
        displayName: 'Client-side pagination',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      serverSideSearch: {
        type: 'toggle',
        displayName: 'Server-side search',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      serverSideSort: {
        type: 'toggle',
        displayName: 'Server-side sort',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      serverSideFilter: {
        type: 'toggle',
        displayName: 'Server-side filter',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      actionButtonBackgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      actionButtonTextColor: {
        type: 'color',
        displayName: 'Text color',
        validation: {
          schema: { type: 'string' },
        },
      },
      displaySearchBox: {
        type: 'toggle',
        displayName: 'Show search box',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      showDownloadButton: {
        type: 'toggle',
        displayName: 'Show download button',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      showFilterButton: {
        type: 'toggle',
        displayName: 'Show filter button',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      showBulkUpdateActions: {
        type: 'toggle',
        displayName: '显示更新按钮',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      showBulkSelector: {
        type: 'toggle',
        displayName: 'Bulk selection',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      highlightSelectedRow: {
        type: 'toggle',
        displayName: 'Highlight selected row',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop ' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    defaultSize: {
      width: 20,
      height: 358,
    },
    events: {
      onRowHovered: { displayName: '鼠标悬停在行时' },
      onRowClicked: { displayName: '点击行时' },
      onBulkUpdate: { displayName: '保存更改时' },
      onPageChanged: { displayName: '页码改变时' },
      onSearch: { displayName: '搜索时' },
      onCancelChanges: { displayName: '取消修改时' },
      onSort: { displayName: '排序时' },
      onCellValueChanged: { displayName: '单元格值修改时' },
      onFilterChanged: { displayName: '过滤条件改变时' },
      onNewRowsAdded: { displayName: '添加新行时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      actionButtonRadius: {
        type: 'code',
        displayName: 'Action Button Radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'boolean' }] },
        },
      },
      tableType: {
        type: 'select',
        displayName: 'Table type',
        options: [
          { name: '有边框', value: 'table-bordered' },
          { name: '无边框', value: 'table-borderless' },
          { name: '经典', value: 'table-classic' },
          { name: '表格线', value: 'table-striped' },
          { name: '有表格线和边框', value: 'table-striped table-bordered' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      cellSize: {
        type: 'select',
        displayName: 'Cell size',
        options: [
          { name: '紧凑', value: 'compact' },
          { name: '宽松', value: 'spacious' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border Radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      selectedRow: {},
      changeSet: {},
      dataUpdates: [],
      pageIndex: 1,
      searchText: '',
      selectedRows: [],
      filters: [],
    },
    actions: [
      {
        handle: 'setPage',
        displayName: '设置页码',
        params: [
          {
            handle: 'page',
            displayName: '页码',
            defaultValue: '{{1}}',
          },
        ],
      },
      {
        handle: 'selectRow',
        displayName: '选择行',
        params: [
          { handle: 'key', displayName: '键' },
          { handle: 'value', displayName: '值' },
        ],
      },
      {
        handle: 'deselectRow',
        displayName: '取消选择行',
      },
      {
        handle: 'discardChanges',
        displayName: '放弃修改',
      },
      {
        displayName: 'Download table data',
        handle: 'downloadTableData',
        params: [
          {
            handle: 'type',
            displayName: 'Type',
            options: [
              { name: 'Download as Excel', value: 'xlsx' },
              { name: 'Download as CSV', value: 'csv' },
              { name: 'Download as PDF', value: 'pdf' },
            ],
            defaultValue: `{{Download as Excel}}`,
            type: 'select',
          },
        ],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: 'Table' },
        visible: { value: '{{true}}' },
        loadingState: { value: '{{false}}' },
        data: {
          value:
            "{{ [ \n\t\t{ id: 1, name: '张三', email: 'zhangsan@example.com'}, \n\t\t{ id: 2, name: '李四', email: 'lisi@example.com'}, \n\t\t{ id: 3, name: '王五', email: 'wang@example.com'}, \n\t\t{ id: 4, name: '赵六', email: 'zhao@example.com'} \n] }}",
        },
        useDynamicColumn: { value: '{{false}}' },
        columnData: {
          value: "{{[{name: 'email', key: 'email'}, {name: 'Full name', key: 'name', isEditable: true}]}}",
        },
        rowsPerPage: { value: '{{10}}' },
        serverSidePagination: { value: '{{false}}' },
        enableNextButton: { value: '{{true}}' },
        enablePrevButton: { value: '{{true}}' },
        totalRecords: { value: '' },
        clientSidePagination: { value: '{{true}}' },
        serverSideSort: { value: '{{false}}' },
        serverSideFilter: { value: '{{false}}' },
        displaySearchBox: { value: '{{true}}' },
        showDownloadButton: { value: '{{true}}' },
        showFilterButton: { value: '{{true}}' },
        autogenerateColumns: { value: true },
        columns: {
          value: [
            {
              name: 'id',
              id: 'e3ecbf7fa52c4d7210a93edb8f43776267a489bad52bd108be9588f790126737',
              autogenerated: true,
            },
            {
              name: 'name',
              id: '5d2a3744a006388aadd012fcc15cc0dbcb5f9130e0fbb64c558561c97118754a',
              autogenerated: true,
            },
            {
              name: 'email',
              id: 'afc9a5091750a1bd4760e38760de3b4be11a43452ae8ae07ce2eebc569fe9a7f',
              autogenerated: true,
            },
          ],
        },
        showBulkUpdateActions: { value: '{{true}}' },
        showBulkSelector: { value: '{{false}}' },
        highlightSelectedRow: { value: '{{false}}' },
        columnSizes: { value: '{{({})}}' },
        actions: { value: [] },
        enabledSort: { value: '{{true}}' },
        hideColumnSelectorButton: { value: '{{false}}' },
      },
      events: [],
      styles: {
        textColor: { value: '#000' },
        actionButtonRadius: { value: '0' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        cellSize: { value: 'compact' },
        borderRadius: { value: '0' },
        tableType: { value: 'table-bordered' },
      },
    },
  },
  {
    name: 'Button',
    displayName: 'displayName',
    description: '用户点击触发查询、提示信息等操作',
    component: 'Button',
    defaultSize: {
      width: 3,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      text: {
        type: 'code',
        displayName: 'Button Text',
        validation: {
          schema: { type: 'string' },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading State',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      badge: {
        type: 'number',
        displayName: '角标显示值',
        validation: {
          schema: { type: 'number' },
        },
      },
    },
    events: {
      onClick: { displayName: '单击时' },
      onHover: { displayName: '悬停时' },
    },
    styles: {
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text color',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
      loaderColor: {
        type: 'color',
        displayName: 'Loader color',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: false,
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: false,
        },
      },
      borderRadius: {
        type: 'number',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'number' },
          defaultValue: false,
        },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
    },
    exposedVariables: {},
    actions: [
      {
        handle: 'click',
        displayName: '点击',
      },
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [{ handle: 'text', displayName: '文本', defaultValue: 'New Text' }],
      },
      {
        handle: 'setBadge',
        displayName: '设置角标',
        params: [{ handle: 'text', displayName: '角标的值', defaultValue: 1 }],
      },
      {
        handle: 'disable',
        displayName: '禁用',
        params: [{ handle: 'disable', displayName: '值', defaultValue: `{{false}}`, type: 'toggle' }],
      },
      {
        handle: 'visibility',
        displayName: '是否显示',
        params: [{ handle: 'visible', displayName: '值', defaultValue: `{{false}}`, type: 'toggle' }],
      },
      {
        handle: 'loading',
        displayName: '载入状态',
        params: [{ handle: 'loading', displayName: '值', defaultValue: `{{false}}`, type: 'toggle' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        text: { value: `Button` },
        loadingState: { value: `{{false}}` },
        badge: { value: 0 },
      },
      events: [],
      styles: {
        backgroundColor: { value: '#375FCF' },
        textColor: { value: '#fff' },
        loaderColor: { value: '#fff' },
        visibility: { value: '{{true}}' },
        borderRadius: { value: '{{0}}' },
        borderColor: { value: '#375FCF' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  //   {
  //     name: 'Chart',
  //     displayName: 'Chart',
  //     description: 'Display charts',
  //     component: 'Chart',
  //     defaultSize: {
  //       width: 20,
  //       height: 400,
  //     },
  //     others: {
  //       showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
  //       showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
  //     },
  //     properties: {
  //       title: {
  //         type: 'code',
  //         displayName: 'Title',
  //         validation: {
  //           schema: {
  //             type: 'string',
  //           },
  //         },
  //       },
  //       data: {
  //         type: 'json',
  //         displayName: 'Data',
  //         validation: {
  //           schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'array' }] },
  //         },
  //       },
  //       loadingState: {
  //         type: 'toggle',
  //         displayName: 'Loading State',
  //         validation: {
  //           schema: { type: 'boolean' },
  //         },
  //       },
  //       markerColor: {
  //         type: 'color',
  //         displayName: 'Marker color',
  //         validation: {
  //           schema: {
  //             type: 'string',
  //           },
  //         },
  //       },
  //       showAxes: {
  //         type: 'toggle',
  //         displayName: 'Show axes',
  //         validation: {
  //           schema: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //       showGridLines: {
  //         type: 'toggle',
  //         displayName: 'Show grid lines',
  //         validation: {
  //           schema: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //       type: {
  //         type: 'select',
  //         displayName: 'Chart type',
  //         options: [
  //           { name: 'Line', value: 'line' },
  //           { name: 'Bar', value: 'bar' },
  //           { name: 'Pie', value: 'pie' },
  //         ],
  //         validation: {
  //           schema: {
  //             type: 'union',
  //             schemas: [{ type: 'string' }, { type: 'boolean' }, { type: 'number' }],
  //           },
  //         },
  //       },
  //       jsonDescription: {
  //         type: 'json',
  //         displayName: 'Json Description',
  //         validation: {
  //           schema: {
  //             type: 'string',
  //           },
  //         },
  //       },
  //       plotFromJson: {
  //         type: 'toggle',
  //         displayName: 'Use Plotly JSON schema',
  //         validation: {
  //           schema: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //     },
  //     events: {},
  //     styles: {
  //       padding: {
  //         type: 'code',
  //         displayName: 'Padding',
  //         validation: {
  //           schema: {
  //             type: 'union',
  //             schemas: [{ type: 'number' }, { type: 'string' }],
  //           },
  //         },
  //       },
  //       visibility: {
  //         type: 'toggle',
  //         displayName: 'Visibility',
  //         validation: {
  //           schema: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //       disabledState: {
  //         type: 'toggle',
  //         displayName: 'Disable',
  //         validation: {
  //           schema: {
  //             type: 'boolean',
  //           },
  //         },
  //       },
  //     },
  //     exposedVariables: {
  //       show: null,
  //     },
  //     definition: {
  //       others: {
  //         showOnDesktop: { value: '{{true}}' },
  //         showOnMobile: { value: '{{false}}' },
  //       },
  //       properties: {
  //         title: { value: '可修改标题' },
  //         markerColor: { value: '#CDE1F8' },
  //         showAxes: { value: '{{true}}' },
  //         showGridLines: { value: '{{true}}' },
  //         plotFromJson: { value: '{{false}}' },
  //         loadingState: { value: `{{false}}` },
  //         jsonDescription: {
  //           value: `{
  //             "data": [
  //                 {
  //                     "x": [
  //                         "Jan",
  //                         "Feb",
  //                         "Mar"
  //                     ],
  //                     "y": [
  //                         100,
  //                         80,
  //                         40
  //                     ],
  //                     "type": "bar"
  //                 }
  //             ]
  //         }`,
  //         },
  //         type: { value: `line` },
  //         data: {
  //           value: `[
  //   { "x": "Jan", "y": 100},
  //   { "x": "Feb", "y": 80},
  //   { "x": "Mar", "y": 40}
  // ]`,
  //         },
  //       },
  //       events: [],
  //       styles: {
  //         padding: { value: '50' },
  //         visibility: { value: '{{true}}' },
  //         disabledState: { value: '{{false}}' },
  //       },
  //     },
  //   },
  {
    name: 'Modal',
    displayName: '弹窗',
    description: '由事件触发的弹窗',
    component: 'Modal',
    defaultSize: {
      width: 10,
      height: 400,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      title: {
        type: 'code',
        displayName: 'Title',
        validation: {
          schema: { type: 'string' },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading State',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      useDefaultButton: {
        type: 'toggle',
        displayName: '使用默认触发按钮',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      triggerButtonLabel: {
        type: 'code',
        displayName: 'Trigger button label',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      hideTitleBar: { type: 'toggle', displayName: 'Hide title bar' },
      hideCloseButton: { type: 'toggle', displayName: 'Hide close button' },
      hideOnEsc: { type: 'toggle', displayName: '按ESC关闭' },
      closeOnClickingOutside: { type: 'toggle', displayName: 'Close on clicking outside' },

      size: {
        type: 'select',
        displayName: 'Modal size',
        options: [
          { name: '小', value: 'sm' },
          { name: '中', value: 'lg' },
          { name: '大', value: 'xl' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {
      onOpen: { displayName: '打开时' },
      onClose: { displayName: '关闭时' },
    },
    styles: {
      headerBackgroundColor: {
        type: 'color',
        displayName: 'Header background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      headerTextColor: {
        type: 'color',
        displayName: '标题文本颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      bodyBackgroundColor: {
        type: 'color',
        displayName: 'Body background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: true,
        },
      },
      triggerButtonBackgroundColor: {
        type: 'color',
        displayName: 'Trigger button background color',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
      triggerButtonTextColor: {
        type: 'color',
        displayName: 'Trigger button text color',
        validation: {
          schema: { type: 'string' },
          defaultValue: false,
        },
      },
    },
    exposedVariables: {
      show: false,
    },
    actions: [
      {
        handle: 'open',
        displayName: '打开',
      },
      {
        handle: 'close',
        displayName: '关闭',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: '可修改标题' },
        loadingState: { value: `{{false}}` },
        useDefaultButton: { value: `{{true}}` },
        triggerButtonLabel: { value: `打开弹窗` },
        size: { value: 'lg' },
        hideTitleBar: { value: '{{false}}' },
        hideCloseButton: { value: '{{false}}' },
        hideOnEsc: { value: '{{true}}' },
        closeOnClickingOutside: { value: '{{false}}' },
      },
      events: [],
      styles: {
        headerBackgroundColor: { value: '#ffffffff' },
        headerTextColor: { value: '#000000' },
        bodyBackgroundColor: { value: '#ffffffff' },
        disabledState: { value: '{{false}}' },
        visibility: { value: '{{true}}' },
        triggerButtonBackgroundColor: { value: '#4D72FA' },
        triggerButtonTextColor: { value: '#ffffffff' },
      },
    },
  },
  {
    name: 'TextInput',
    displayName: '文本框',
    description: '表单的文本字段',
    component: 'TextInput',
    defaultSize: {
      width: 6,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    validation: {
      regex: { type: 'code', displayName: 'Regex' },
      minLength: { type: 'code', displayName: 'Min length' },
      maxLength: { type: 'code', displayName: 'Max length' },
      customRule: { type: 'code', displayName: 'Custom validation' },
    },
    events: {
      onChange: { displayName: '修改内容时' },
      onEnterPressed: { displayName: '按下回车键时' },
      onFocus: { displayName: '获取焦点时' },
      onBlur: { displayName: '失去焦点时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: { schema: { type: 'string' } },
      },
      backgroundColor: {
        type: 'color',
        displayName: 'Background Color',
        validation: { schema: { type: 'string' } },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: { schema: { type: 'string' } },
      },
      errTextColor: {
        type: 'color',
        displayName: '错误文本颜色',
        validation: { schema: { type: 'string' } },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: { schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
      },
      visibility: { type: 'toggle', displayName: 'Visibility', validation: { schema: { type: 'boolean' } } },
      disabledState: { type: 'toggle', displayName: 'Disable', validation: { schema: { type: 'boolean' } } },
    },
    exposedVariables: {
      value: '',
    },
    actions: [
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [{ handle: 'text', displayName: '文本', defaultValue: 'New Text' }],
      },
      {
        handle: 'clear',
        displayName: '清除',
      },
      {
        handle: 'setFocus',
        displayName: '获取焦点',
      },
      {
        handle: 'setBlur',
        displayName: '失去焦点',
      },
      {
        handle: 'disable',
        displayName: '禁用',
        params: [{ handle: 'disable', displayName: '值', defaultValue: '{{false}}', type: 'toggle' }],
      },
      {
        handle: 'visibility',
        displayName: '是否可见',
        params: [{ handle: 'visibility', displayName: '值', defaultValue: '{{false}}', type: 'toggle' }],
      },
    ],
    definition: {
      validation: {
        regex: { value: '' },
        minLength: { value: null },
        maxLength: { value: null },
        customRule: { value: null },
      },
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        value: { value: '' },
        placeholder: { value: '请输入' },
      },
      events: [],
      styles: {
        textColor: { value: '#000' },
        borderColor: { value: '#dadcde' },
        errTextColor: { value: '#ff0000' },
        borderRadius: { value: '{{0}}' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        backgroundColor: { value: '#fff' },
      },
    },
  },
  {
    name: 'NumberInput',
    displayName: '数字框',
    description: '表单的数字字段',
    component: 'NumberInput',
    defaultSize: {
      width: 4,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      minValue: {
        type: 'code',
        displayName: 'Minimum value',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      maxValue: {
        type: 'code',
        displayName: 'Maximum value',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: 'Background Color',
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: { schema: { type: 'string' } },
      },
    },
    exposedVariables: {
      value: 99,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        value: { value: '99' },
        maxValue: { value: '' },
        minValue: { value: '' },
        placeholder: { value: '0' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
        backgroundColor: { value: '#ffffffff' },
        borderColor: { value: '#fff' },
        textColor: { value: '#232e3c' },
      },
    },
  },
  {
    name: 'PasswordInput',
    displayName: '密码框',
    description: '表单的密码输入字段',
    component: 'PasswordInput',
    defaultSize: {
      width: 4,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
      password: {
        type: 'code',
        displayName: '默认密码',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    validation: {
      regex: { type: 'code', displayName: 'Regex' },
      minLength: { type: 'code', displayName: 'Min length' },
      maxLength: { type: 'code', displayName: 'Max length' },
      customRule: { type: 'code', displayName: 'Custom validation' },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: 'Background Color',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    exposedVariables: {
      value: '',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        placeholder: { value: '请输入密码' },
      },
      validation: {
        regex: { value: '' },
        minLength: { value: null },
        maxLength: { value: null },
        customRule: { value: null },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
        backgroundColor: { value: '#ffffff' },
      },
    },
  },
  {
    name: 'Datepicker',
    displayName: '日期选择器',
    description: '选择日期和时间',
    component: 'Datepicker',
    defaultSize: {
      width: 5,
      height: 30,
    },
    validation: {
      customRule: { type: 'code', displayName: 'Custom validation' },
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      defaultValue: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'string' },
        },
      },
      format: {
        type: 'code',
        displayName: 'Format',
        validation: {
          schema: { type: 'string' },
        },
      },
      enableTime: {
        type: 'toggle',
        displayName: 'Enable time selection?',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: false,
        },
      },
      enableDate: {
        type: 'toggle',
        displayName: 'Enable date selection?',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: true,
        },
      },
      disabledDates: {
        type: 'code',
        displayName: 'Disabled dates',
        validation: {
          schema: { type: 'array', element: { type: 'string' } },
        },
      },
    },
    events: {
      onSelect: { displayName: '选择日期后' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    exposedVariables: {
      value: '',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      validation: {
        customRule: { value: null },
      },
      properties: {
        defaultValue: { value: "{{moment().format('yyyy/MM/DD')}}" },
        format: { value: 'YYYY/MM/DD' },
        enableTime: { value: '{{false}}' },
        enableDate: { value: '{{true}}' },
        disabledDates: { value: '{{[]}}' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
      },
    },
  },
  {
    name: 'Checkbox',
    displayName: '复选框',
    description: '单个复选框',
    component: 'Checkbox',
    defaultSize: {
      width: 5,
      height: 30,
    },
    actions: [
      {
        handle: 'setChecked',
        displayName: '设置选中状态',
        params: [{ handle: 'status', displayName: '状态' }],
      },
    ],
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      defaultValue: {
        type: 'toggle',
        displayName: 'Default Status',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onCheck: { displayName: '选中时' },
      onUnCheck: { displayName: '取消选中时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      checkboxColor: {
        type: 'color',
        displayName: 'Checkbox Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: false,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '复选框' },
        defaultValue: { value: '{{false}}' },
      },
      events: [],
      styles: {
        textColor: { value: '' },
        checkboxColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Radio-button',
    displayName: '单选按钮',
    description: '单选按钮',
    component: 'RadioButton',
    defaultSize: {
      width: 6,
      height: 60,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
        },
      },
      values: {
        type: 'code',
        displayName: 'Option values',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
          },
        },
      },
      display_values: {
        type: 'code',
        displayName: 'Option labels',
        validation: {
          schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
        },
      },
    },
    events: {
      onSelectionChange: { displayName: '选择时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      activeColor: {
        type: 'color',
        displayName: 'Active Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    actions: [
      {
        handle: 'selectOption',
        displayName: '选择选项',
        params: [
          {
            handle: 'option',
            displayName: '选项',
          },
        ],
      },
    ],
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '单选' },
        value: { value: '{{true}}' },
        values: { value: '{{[true,false]}}' },
        display_values: { value: '{{["yes", "no"]}}' },
        visible: { value: '{{true}}' },
      },
      events: [],
      styles: {
        textColor: { value: '' },
        activeColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'ToggleSwitch',
    displayName: '拨动开关',
    description: '拨动开关',
    component: 'ToggleSwitch',
    defaultSize: {
      width: 6,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      defaultValue: {
        type: 'toggle',
        displayName: 'Default Status',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onChange: { displayName: '状态改变时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      toggleSwitchColor: {
        type: 'color',
        displayName: 'Toggle Switch Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: false,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '拨动开关' },
        defaultValue: { value: '{{false}}' },
      },
      events: [],
      styles: {
        textColor: { value: '' },
        toggleSwitchColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Textarea',
    displayName: '长文本输入框',
    description: '长文本输入框',
    component: 'TextArea',
    defaultSize: {
      width: 6,
      height: 100,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'string' },
        },
      },
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    exposedVariables: {
      value:
        'tooljet是一个开源低代码平台，用于以最少的工程工作量构建和部署内部工具 🚀',
    },
    actions: [
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [{ handle: 'text', displayName: '文本', defaultValue: 'New Text' }],
      },
      {
        handle: 'clear',
        displayName: '清除',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        value: {
          value:
            'tooljet是一个开源低代码平台，用于以最少的工程工作量构建和部署内部工具 🚀',
        },
        placeholder: { value: '占位符文本' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
      },
    },
  },
  {
    name: 'DateRangePicker',
    displayName: '日期范围选取器',
    description: '选择日期范围',
    component: 'DaterangePicker',
    defaultSize: {
      width: 10,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      defaultStartDate: {
        type: 'code',
        displayName: 'Default start date',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      defaultEndDate: {
        type: 'code',
        displayName: 'Default end date',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      format: {
        type: 'code',
        displayName: 'Format',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    events: {
      onSelect: { displayName: '选择时' },
    },
    styles: {
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'number' }, { type: 'string' }],
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {
      endDate: {},
      startDate: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        defaultStartDate: { value: '{{moment().format("yyyy/MM/DD")}}' },
        defaultEndDate: { value: '{{moment().format("yyyy/MM/DD")}}' },

        format: { value: 'YYYY/MM/DD' },
      },
      events: [],
      styles: {
        borderRadius: { value: '0' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Text',
    displayName: '文本',
    description: '显示markdown或HTML',
    component: 'Text',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      text: {
        type: 'code',
        displayName: 'Text',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Show loading state',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      parseEnter: {
        type: 'toggle',
        displayName: '文本模式解析换行',
        validation: {
          schema: { type: 'boolean' },
        }
      },
      markDownMode: {
        type: 'toggle',
        displayName: '解析Markdown',
        validation: {
          schema: { type: 'boolean' },
        }
      },
    },
    defaultSize: {
      width: 6,
      height: 30,
    },
    events: [],
    styles: {
      fontWeight: {
        type: 'select',
        displayName: 'Font Weight',
        options: [
          { name: '常规', value: 'normal' },
          { name: '粗', value: 'bold' },
          { name: '细', value: 'lighter' },
          { name: '加粗', value: 'bolder' },
        ],
      },
      decoration: {
        type: 'select',
        displayName: 'Text Decoration',
        options: [
          { name: '无', value: 'none' },
          { name: '下划线', value: 'underline' },
          { name: '中划线', value: 'line-through' },
          { name: '上划线', value: 'overline' },
          { name: '上划线+下划线', value: 'overline underline' },
        ],
      },
      transformation: {
        type: 'select',
        displayName: '文本大小写转换',
        options: [
          { name: '无', value: 'none' },
          { name: '大写', value: 'uppercase' },
          { name: '小写', value: 'lowercase' },
          { name: '首字大写', value: 'capitalize' },
        ],
      },
      fontStyle: {
        type: 'select',
        displayName: 'Font Style',
        options: [
          { name: '常规', value: 'normal' },
          { name: '斜体字', value: 'italic' },
          { name: '倾斜文字', value: 'oblique' },
        ],
      },
      lineHeight: { type: 'number', displayName: 'Line Height' },
      textIndent: { type: 'number', displayName: 'Text Indent' },
      letterSpacing: { type: 'number', displayName: 'Letter Spacing' },
      wordSpacing: { type: 'number', displayName: 'Word Spacing' },
      fontVariant: {
        type: 'select',
        displayName: 'Font Variant',
        options: [
          { name: '常规', value: 'normal' },
          { name: '小体大写', value: 'small-caps' },
          { name: '初始值', value: 'initial' },
          { name: '继承', value: 'inherit' },
        ],
      },
      textSize: {
        type: 'number',
        displayName: 'Text Size',
        validation: {
          schema: { type: 'number' },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: 'Background Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textAlign: {
        type: 'alignButtons',
        displayName: 'Align Text',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      text: 'Hello, there!',
    },
    actions: [
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [{ handle: 'text', displayName: '文本', defaultValue: 'New text' }],
      },
      {
        handle: 'visibility',
        displayName: '是否可见',
        params: [{ handle: 'visibility', displayName: '值', defaultValue: `{{false}}`, type: 'toggle' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        text: { value: 'Hello, there!' },
        loadingState: { value: `{{false}}` },
        parseEnter: { value: `{{true}}` },
        markDownMode: { value: `{{false}}` },
      },
      events: [],
      styles: {
        backgroundColor: { value: '#fff00000' },
        textColor: { value: '#000000' },
        textSize: { value: 14 },
        textAlign: { value: 'left' },
        fontWeight: { value: 'normal' },
        decoration: { value: 'none' },
        transformation: { value: 'none' },
        fontStyle: { value: 'normal' },
        lineHeight: { value: 1.5 },
        textIndent: { value: 0 },
        letterSpacing: { value: 0 },
        wordSpacing: { value: 0 },
        fontVariant: { value: 'normal' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Image',
    displayName: '图片框',
    description: '显示图像picture',
    defaultSize: {
      width: 3,
      height: 100,
    },
    component: 'Image',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      source: {
        type: 'code',
        displayName: 'URL',
        validation: {
          schema: { type: 'string' },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading state',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      alternativeText: {
        type: 'code',
        displayName: 'Alternative text',
        validation: {
          schema: { type: 'string' },
        },
      },
      zoomButtons: {
        type: 'toggle',
        displayName: 'Zoom button',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      rotateButton: {
        type: 'toggle',
        displayName: 'Rotate button',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onClick: { displayName: '单击时' },
    },
    styles: {
      borderType: {
        type: 'select',
        displayName: 'Border type',
        options: [
          { name: '无', value: 'none' },
          { name: '圆角', value: 'rounded' },
          { name: '圆形', value: 'rounded-circle' },
          { name: '缩略图', value: 'img-thumbnail' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      padding: {
        type: 'code',
        displayName: 'Padding',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      imageFit: {
        type: 'select',
        displayName: 'Image fit',
        options: [
          { name: '填充', value: 'fill' },
          { name: '覆盖', value: 'contain' },
          { name: '包含', value: 'cover' },
          { name: '缩小', value: 'scale-down' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        source: { value: 'https://www.svgrepo.com/show/34217/image.svg' },
        visible: { value: '{{true}}' },
        loadingState: { value: '{{false}}' },
        alternativeText: { value: '' },
        zoomButtons: { value: '{{false}}' },
        rotateButton: { value: '{{false}}' },
      },
      events: [],
      styles: {
        borderType: { value: 'none' },
        padding: { value: '0' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        imageFit: { value: 'contain' },
        backgroundColor: { value: '' },
      },
    },
  },
  {
    name: 'Container',
    displayName: '容器',
    description: '多个组件的封装器',
    defaultSize: {
      width: 5,
      height: 200,
    },
    component: 'Container',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      showScroll: {
        type: 'toggle',
        displayName: '显示滚动条',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {},
    styles: {
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border Radius',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        visible: { value: '{{true}}' },
        showScroll: { value: '{{true}}' },
      },
      events: [],
      styles: {
        backgroundColor: { value: '#fff' },
        borderRadius: { value: '0' },
        borderColor: { value: '#fff' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Dropdown',
    displayName: '单选下拉框',
    description: '从选项中选择一个值',
    defaultSize: {
      width: 8,
      height: 30,
    },
    component: 'DropDown',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    validation: {
      customRule: { type: 'code', displayName: 'Custom validation' },
    },
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }],
          },
        },
      },
      values: {
        type: 'code',
        displayName: 'Option values',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
          },
        },
      },
      display_values: {
        type: 'code',
        displayName: 'Option labels',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
          },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Options loading state',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onSelect: { displayName: '选择时' },
      onSearchTextChanged: { displayName: '搜索文本改变时' },
    },
    styles: {
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'number' }, { type: 'string' }],
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      selectedTextColor: {
        type: 'color',
        displayName: 'Selected Text Color',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      justifyContent: {
        type: 'alignButtons',
        displayName: 'Align Text',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    exposedVariables: {
      value: 2,
      searchText: '',
      label: 'Select',
      optionLabels: ['one', 'two', 'three'],
      selectedOptionLabel: 'two',
    },
    actions: [
      {
        handle: 'selectOption',
        displayName: '选择设置',
        params: [{ handle: 'select', displayName: '选择' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      validation: {
        customRule: { value: null },
      },
      properties: {
        label: { value: '单选下拉框' },
        value: { value: '{{1}}' },
        values: { value: '{{[1,2,3]}}' },
        display_values: { value: '{{["上海", "北京", "广州"]}}' },
        visible: { value: '{{true}}' },
        loadingState: { value: '{{false}}' },
      },
      events: [],
      styles: {
        borderRadius: { value: '0' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        justifyContent: { value: 'left' },
      },
    },
  },
  {
    name: 'Multiselect',
    displayName: '多选框',
    description: '从选项中选择多个值',
    defaultSize: {
      width: 12,
      height: 30,
    },
    component: 'Multiselect',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    actions: [
      {
        handle: 'selectOption',
        displayName: '选择选项',
        params: [
          {
            handle: 'option',
            displayName: '选项',
          },
        ],
      },
      {
        handle: 'deselectOption',
        displayName: '取消选择选项',
        params: [
          {
            handle: 'option',
            displayName: '选项',
          },
        ],
      },
      {
        handle: 'clearSelections',
        displayName: '清除已选择',
      },
    ],
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
        },
      },
      values: {
        type: 'code',
        displayName: 'Option values',
        validation: {
          schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
        },
      },
      display_values: {
        type: 'code',
        displayName: 'Option labels',
        validation: {
          schema: { type: 'array', element: { type: 'string' } },
        },
      },
      showAllOption: {
        type: 'toggle',
        displayName: 'Enable select All option',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onSelect: { displayName: '选择时' },
    },
    styles: {
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      values: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '多选下拉框' },
        value: { value: '{{[2,3]}}' },
        values: { value: '{{[1,2,3]}}' },
        display_values: { value: '{{["北京", "上海", "杭州"]}}' },
        visible: { value: '{{true}}' },
      },
      events: [],
      styles: {
        borderRadius: { value: '0' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'RichTextEditor',
    displayName: '富文本编辑器',
    description: '可编辑富文本的编辑器',
    component: 'RichTextEditor',
    defaultSize: {
      width: 16,
      height: 210,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
      defaultValue: {
        type: 'code',
        displayName: 'Default Value',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {
      value: '',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        placeholder: { value: '富文本框' },
        defaultValue: { value: '' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  // {
  //   name: 'Map',
  //   displayName: 'Map',
  //   description: 'Display Google Maps',
  //   component: 'Map',
  //   defaultSize: {
  //     width: 16,
  //     height: 420,
  //   },
  //   others: {
  //     showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
  //     showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
  //   },
  //   properties: {
  //     initialLocation: {
  //       type: 'code',
  //       displayName: 'Initial location',
  //       tip: '这个位置将是地图的初始中心',
  //       options: {
  //         mode: 'javascript',
  //         theme: 'duotone-light',
  //         className: 'map-location-input pr-2',
  //       },
  //       validation: {
  //         schema: {
  //           type: 'union',
  //           schemas: [{ type: 'array', element: { type: 'object' } }, { type: 'object' }],
  //         },
  //       },
  //     },
  //     defaultMarkers: {
  //       type: 'code',
  //       displayName: 'Default markers',
  //       options: {
  //         mode: 'javascript',
  //         theme: 'duotone-light',
  //         className: 'map-location-input pr-2',
  //       },
  //       validation: {
  //         schema: {
  //           type: 'union',
  //           schemas: [{ type: 'array', element: { type: 'object' } }, { type: 'object' }],
  //         },
  //       },
  //     },
  //     addNewMarkers: {
  //       type: 'toggle',
  //       displayName: 'Add new markers',
  //       validation: {
  //         schema: {
  //           type: 'boolean',
  //         },
  //       },
  //     },
  //     canSearch: {
  //       type: 'toggle',
  //       displayName: 'Search for places',
  //       validation: {
  //         schema: {
  //           type: 'boolean',
  //         },
  //       },
  //     },
  //   },
  //   events: {
  //     onBoundsChange: { displayName: 'On bounds change' },
  //     onCreateMarker: { displayName: 'On create marker' },
  //     onMarkerClick: { displayName: 'On marker click' },
  //   },
  //   actions: [
  //     {
  //       handle: 'setLocation',
  //       displayName: '设置位置',
  //       params: [
  //         { handle: 'lat', displayName: '维度' },
  //         { handle: 'lng', displayName: '经度' },
  //       ],
  //     },
  //   ],
  //   styles: {
  //     visibility: {
  //       type: 'toggle',
  //       displayName: 'Visibility',
  //       validation: {
  //         schema: {
  //           type: 'boolean',
  //         },
  //       },
  //     },
  //     disabledState: {
  //       type: 'toggle',
  //       displayName: 'Disable',
  //       validation: {
  //         schema: {
  //           type: 'boolean',
  //         },
  //       },
  //     },
  //   },
  //   exposedVariables: {
  //     center: {},
  //   },
  //   definition: {
  //     others: {
  //       showOnDesktop: { value: '{{true}}' },
  //       showOnMobile: { value: '{{false}}' },
  //     },
  //     properties: {
  //       initialLocation: {
  //         value: `{{ {"lat": 40.7128, "lng": -73.935242} }}`,
  //       },
  //       defaultMarkers: {
  //         value: `{{ [{"lat": 40.7128, "lng": -73.935242}] }}`,
  //       },
  //       canSearch: {
  //         value: `{{true}}`,
  //       },
  //       addNewMarkers: { value: `{{true}}` },
  //     },
  //     events: [],
  //     styles: {
  //       visibility: { value: '{{true}}' },
  //       disabledState: { value: '{{false}}' },
  //     },
  //   },
  // },
  {
    name: 'AMaps',
    displayName: '高德地图',
    description: '显示高德地图',
    component: 'AMaps',
    defaultSize: {
      width: 16,
      height: 420,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      initialLocation: {
        type: 'code',
        displayName: 'Initial location',
        tip: '这个位置将是地图的初始中心',
        options: {
          mode: 'javascript',
          theme: 'duotone-light',
          className: 'map-location-input pr-2',
        },
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'array', element: { type: 'object' } }, { type: 'object' }],
          },
        },
      },
      defaultMarkers: {
        type: 'code',
        displayName: 'Default markers',
        options: {
          mode: 'javascript',
          theme: 'duotone-light',
          className: 'map-location-input pr-2',
        },
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'array', element: { type: 'object' } }, { type: 'object' }],
          },
        },
      },
      addNewMarkers: {
        type: 'toggle',
        displayName: 'Add new markers',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      enableDelete: {
        type: 'toggle',
        displayName: '允许右键删除标签',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      canSearch: {
        type: 'toggle',
        displayName: 'Search for places',
        tip: "高德默认每天只能调用100次，超过就无法补全",
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showScaleControl: {
        type: 'toggle',
        displayName: '显示比例尺',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showCenterMarker: {
        type: 'toggle',
        displayName: '显示中心点标记',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      geolocation: {
        type: 'toggle',
        displayName: '默认定位到当前位置',
        tip: '开启后，如果定位成功，则【起始位置】失效',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      zoom: {
        type: 'number',
        displayName: '默认缩放级别',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      mapApiKey: {
        type: 'code',
        displayName: '高德地图Akey',
        tip: '可以到首页->工作区设置->管理工作区变量,添加类型为clint，名称为AMAP_API_KEY的变量，API可以前往高德开放平台申请。',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      mapSecurityKey: {
        type: 'code',
        displayName: '高德API密钥',
        tip: '可以到首页->工作区设置->管理工作区变量,添加类型为clint，名称为AMAP_SECURITY_KEY的变量，不设置密钥无法搜索地点，密钥可以前往高德开放平台申请。',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    events: {
      onBoundsChange: { displayName: '中心点改变时' },
      onCreateMarker: { displayName: '创建标记时' },
      onMarkerClick: { displayName: '左键单击标记时' },
      onMarkerRightClick: { displayName: '右键删除标记时' },
    },
    actions: [
      {
        handle: 'setLocation',
        displayName: '设置位置',
        params: [
          { handle: 'lat', displayName: '维度' },
          { handle: 'lng', displayName: '经度' },
        ],
      },
    ],
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {
      center: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        initialLocation: {
          value: `{{ {"lat": 30.24887, "lng": 120.202352} }}`,
        },
        defaultMarkers: {
          value: `{{ [{"lat": 30.24887, "lng": 120.288352}] }}`,
        },
        mapApiKey: {
          value: 'a7a90e05a37d3f6bf76d4a9032fc9129',
        },
        mapSecurityKey: {
          value: '',
        },
        showScaleControl: {
          value: `{{true}}`
        },
        enableDelete: {
          value: `{{true}}`
        },
        showCenterMarker: {
          value: `{{true}}`
        },
        canSearch: {
          value: `{{true}}`,
        },
        geolocation: {
          value: `{{false}}`,
        },
        zoom: {
          value: 10,
        },
        addNewMarkers: { value: `{{true}}` },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'QrScanner',
    displayName: '二维码扫描器',
    description: '扫描二维码并读取数据',
    component: 'QrScanner',
    defaultSize: {
      width: 10,
      height: 300,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {},
    events: {
      onDetect: { displayName: '检测到时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      lastDetectedValue: '',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{true}}' },
      },
      properties: {},
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'StarRating',
    displayName: '评分',
    description: '评定等级',
    component: 'StarRating',
    defaultSize: {
      width: 10,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      label: {
        type: 'code',
        displayName: 'Label',
        validation: {
          schema: { type: 'string' },
        },
      },
      maxRating: {
        type: 'code',
        displayName: 'Number of stars',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      defaultSelected: {
        type: 'code',
        displayName: 'Default no of selected stars',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      allowHalfStar: {
        type: 'toggle',
        displayName: 'Enable half star',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      tooltips: {
        type: 'code',
        displayName: 'Tooltips',
        validation: {
          schema: { type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } },
        },
      },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Star Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      labelColor: {
        type: 'color',
        displayName: 'Label Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: 0,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '选择您的评分' },
        maxRating: { value: '5' },
        defaultSelected: { value: '5' },
        allowHalfStar: { value: '{{false}}' },
        visible: { value: '{{true}}' },
        tooltips: { value: '{{[]}}' },
      },
      events: [],
      styles: {
        textColor: { value: '#ffb400' },
        labelColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Divider',
    displayName: '分割线',
    description: '组件之间的分隔线',
    component: 'Divider',
    defaultSize: {
      width: 10,
      height: 10,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {},
    events: {},
    styles: {
      dividerColor: {
        type: 'color',
        displayName: 'Divider Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {},
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        dividerColor: { value: '' },
      },
    },
  },
  {
    name: 'FilePicker',
    displayName: '文件选择器',
    description: '用于上传文件的文本选择器',
    component: 'FilePicker',
    defaultSize: {
      width: 15,
      height: 100,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    actions: [
      {
        handle: 'clearFiles',
        displayName: '清除文件',
      },
    ],
    properties: {
      instructionText: {
        type: 'code',
        displayName: 'Instruction Text',
        validation: {
          schema: { type: 'string' },
        },
      },
      enableDropzone: {
        type: 'code',
        displayName: 'Use Drop zone',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enablePicker: {
        type: 'code',
        displayName: 'Use File Picker',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enableMultiple: {
        type: 'code',
        displayName: 'Pick multiple files',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      maxFileCount: {
        type: 'code',
        displayName: 'Max file count',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      fileType: {
        type: 'code',
        displayName: 'Accept file types',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      maxSize: {
        type: 'code',
        displayName: 'Max size limit (Bytes)',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      minSize: {
        type: 'code',
        displayName: 'Min size limit (Bytes)',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      parseContent: {
        type: 'toggle',
        displayName: 'Parse content',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      parseFileType: {
        type: 'select',
        displayName: 'File type',
        options: [
          { name: '从扩展自动检测', value: 'auto-detect' },
          { name: 'CSV', value: 'csv' },
          { name: 'Excel - xls', value: 'vnd.ms-excel' },
          {
            name: 'Excel - xlsx',
            value: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          },
        ],
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    events: {
      onFileSelected: { displayName: '选定文件时' },
      onFileLoaded: { displayName: '加载文件时' },
      onFileDeselected: { displayName: '取消选择文件时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
    },
    exposedVariables: {
      file: [{ name: '', content: '', dataURL: '', type: '', parsedData: '' }],
      isParsing: false,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        instructionText: { value: '将一些文件拖放到此处，或单击以选择文件' },
        enableDropzone: { value: '{{true}}' },
        enablePicker: { value: '{{true}}' },
        maxFileCount: { value: '{{2}}' },
        enableMultiple: { value: '{{false}}' },
        fileType: { value: '{{"image/*"}}' },
        maxSize: { value: '{{1048576}}' },
        minSize: { value: '{{50}}' },
        parseContent: { value: '{{false}}' },
        parseFileType: { value: 'auto-detect' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
      },
    },
  },
  {
    name: 'Calendar',
    displayName: '日历',
    description: '日历',
    component: 'Calendar',
    defaultSize: {
      width: 30,
      height: 600,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      dateFormat: { type: 'code', displayName: 'Date format' },
      defaultDate: { type: 'code', displayName: 'Default date' },
      events: { type: 'code', displayName: 'Events' },
      resources: { type: 'code', displayName: 'Resources' },
      defaultView: {
        type: 'select', displayName: 'Default view', options: [
          { name: '月视图', value: 'month' },
          { name: '周视图', value: 'week' },
          { name: '日视图', value: 'day' },
          { name: '日程列表', value: 'agenda' },
        ]
      },
      startTime: {
        type: 'code',
        displayName: 'Start time on week and day view',
      },
      endTime: { type: 'code', displayName: 'End time on week and day view' },
      displayToolbar: { type: 'toggle', displayName: 'Show toolbar' },
      displayViewSwitcher: {
        type: 'toggle',
        displayName: 'Show view switcher',
      },
      highlightToday: { type: 'toggle', displayName: 'Highlight today' },
      showPopOverOnEventClick: {
        type: 'toggle',
        displayName: 'Show popover when event is clicked',
      },
    },
    events: {
      onCalendarEventSelect: { displayName: '事件选择时' },
      onCalendarSlotSelect: { displayName: '插槽选择时' },
      onCalendarNavigate: { displayName: '日期导航时' },
      onCalendarViewChange: { displayName: '视图更改时' },
    },
    styles: {
      visibility: { type: 'toggle', displayName: 'Visibility' },
      cellSizeInViewsClassifiedByResource: {
        type: 'select',
        displayName: 'Cell size in views classified by resource',
        options: [
          { name: '紧凑', value: 'compact' },
          { name: '宽松', value: 'spacious' },
        ],
      },
      weekDateFormat: {
        type: 'code',
        displayName: 'Header date format on week view',
      },
    },
    exposedVariables: {
      selectedEvent: {},
      selectedSlots: {},
      currentView: 'month',
      currentDate: undefined,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        dateFormat: {
          value: 'YYYY-DD-MM HH:mm:ss',
        },
        defaultDate: {
          value: '{{moment().format("YYYY-DD-MM HH:mm:ss")}}',
        },
        events: {
          value:
            "{{[\n\t\t{\n\t\t\t title: '晨会',\n\t\t\t start: `${moment().startOf('day').format('YYYY-DD-MM HH:mm:ss')}`,\n\t\t\t end: `${moment().startOf('day').hour(6).format('YYYY-DD-MM HH:mm:ss')}`,\n\t\t\t allDay: false,\n\t\t\t color: '#8D72DA',\n\t\tresourceId: 1},{\n\t\t\t title: '会议1',\n\t\t\t start: `${moment().startOf('day').add(9,'hour').format('YYYY-DD-MM HH:mm:ss')}`,\n\t\t\t end: `${moment().endOf('day').format('YYYY-DD-MM HH:mm:ss')}`,\n\t\t\t allDay: false,\n\t\t\t color: '#4D72DA',\n\t\tresourceId: 2}\n]}}",
        },
        resources: {
          value: "{{[{resourceId: 1, title: '会议室1'},{resourceId: 2, title: '会议室2'}]}}",
        },
        defaultView: {
          value: "{{'month'}}",
        },
        startTime: {
          value: "{{moment().startOf('day').format('YYYY-DD-MM HH:mm:ss')}}",
        },
        endTime: {
          value: "{{moment().endOf('day').format('YYYY-DD-MM HH:mm:ss')}}",
        },
        displayToolbar: {
          value: true,
        },
        displayViewSwitcher: {
          value: true,
        },
        highlightToday: {
          value: true,
        },
        showPopOverOnEventClick: {
          value: false,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        cellSizeInViewsClassifiedByResource: { value: 'compact' },
        weekDateFormat: { value: 'D' },
      },
    },
  },
  {
    name: 'Iframe',
    displayName: 'Iframe',
    description: '显示一个框架',
    defaultSize: {
      width: 10,
      height: 310,
    },
    component: 'IFrame',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      source: {
        type: 'code',
        displayName: 'URL',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        source: { value: 'https://tooljet.io/' },
        visible: { value: '{{true}}' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'CodeEditor',
    displayName: '代码编辑器',
    description: '用于常用代码编辑',
    component: 'CodeEditor',
    defaultSize: {
      width: 15,
      height: 120,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      enableLineNumber: {
        type: 'code',
        displayName: 'Show Line Number',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      mode: {
        type: 'code',
        displayName: 'Mode',
        validation: {
          schema: { type: 'string' },
        },
      },
      placeholder: {
        type: 'code',
        displayName: 'Placeholder',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    exposedVariables: {
      value: '',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        enableLineNumber: { value: '{{true}}' },
        mode: { value: 'javascript' },
        placeholder: { value: '' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
      },
    },
  },
  {
    name: 'VerticalTabs',
    displayName: '垂直选项卡',
    description: '选项卡组件',
    component: 'VerticalTabs',
    defaultSize: {
      width: 30,
      height: 300,
    },
    defaultChildren: [
    ],
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      tabs: {
        type: 'code',
        displayName: 'Tabs',
        validation: {
          schema: {
            type: 'array',
            element: {
              type: 'object',
              object: {
                id: {
                  type: 'union',
                  schemas: [{ type: 'string' }, { type: 'number' }],
                },
              },
            },
          },
        },
      },
      defaultTab: {
        type: 'code',
        displayName: 'Default tab',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      hideTabs: {
        type: 'toggle',
        displayName: 'Hide Tabs',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      tabNavWidth: {
        type: 'number',
        displayName: '侧边栏宽度',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      renderOnlyActiveTab: {
        type: 'toggle',
        displayName: 'Render only active tab',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: { onTabSwitch: { displayName: '选项卡切换时' } },
    styles: {
      highlightColor: {
        type: 'color',
        displayName: 'Highlight Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    actions: [
      {
        handle: 'setTab',
        displayName: '设置选项卡',
        params: [
          {
            handle: 'id',
            displayName: 'Id',
          },
        ],
      },
    ],
    exposedVariables: { currentTab: '' },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        tabs: {
          value:
            "{{[ \n\t\t{ title: '主页', id: '0' }, \n\t\t{ title: '展示', id: '1' }, \n\t\t{ title: '设置', id: '2' } \n ]}}",
        },
        defaultTab: { value: '0' },
        hideTabs: { value: false },
        tabNavWidth: { value: 100 },
        renderOnlyActiveTab: { value: true },
      },
      events: [],
      styles: {
        highlightColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Tabs',
    displayName: '选项卡',
    description: '选项卡组件',
    defaultSize: {
      width: 30,
      height: 300,
    },
    defaultChildren: [
      {
        componentName: 'Image',
        layout: {
          top: 60,
          left: 37,
          height: 100,
        },
        tab: 0,
        properties: ['source'],
        defaultValue: {
          source: 'https://uploads-ssl.webflow.com/6266634263b9179f76b2236e/62666392f32677b5cb2fb84b_logo.svg',
        },
      },
      {
        componentName: 'Text',
        layout: {
          top: 100,
          left: 17,
          height: 50,
          width: 34,
        },
        tab: 1,
        properties: ['text'],
        defaultValue: {
          text: '开源低代码框架，可在几分钟内构建和部署内部工具.',
        },
      },
      {
        componentName: 'Table',
        layout: {
          top: 0,
          left: 1,
          width: 42,
          height: 250,
        },
        tab: 2,
      },
    ],
    component: 'Tabs',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      tabs: {
        type: 'code',
        displayName: 'Tabs',
        validation: {
          schema: {
            type: 'array',
            element: {
              type: 'object',
              object: {
                id: {
                  type: 'union',
                  schemas: [{ type: 'string' }, { type: 'number' }],
                },
              },
            },
          },
        },
      },
      defaultTab: {
        type: 'code',
        displayName: 'Default tab',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      hideTabs: {
        type: 'toggle',
        displayName: 'Hide Tabs',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      renderOnlyActiveTab: {
        type: 'toggle',
        displayName: 'Render only active tab',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: { onTabSwitch: { displayName: '选项卡切换时' } },
    styles: {
      highlightColor: {
        type: 'color',
        displayName: 'Highlight Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      tabWidth: {
        type: 'select',
        displayName: 'Tab width',
        options: [
          { name: '自动', value: 'auto' },
          { name: '平均分配', value: 'split' },
        ],
      },
    },
    actions: [
      {
        handle: 'setTab',
        displayName: '设置选项卡',
        params: [
          {
            handle: 'id',
            displayName: 'Id',
          },
        ],
      },
    ],
    exposedVariables: { currentTab: '' },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        tabs: {
          value:
            "{{[ \n\t\t{ title: '主页', id: '0' }, \n\t\t{ title: '展示', id: '1' }, \n\t\t{ title: '设置', id: '2' } \n ]}}",
        },
        defaultTab: { value: '0' },
        hideTabs: { value: false },
        renderOnlyActiveTab: { value: true },
      },
      events: [],
      styles: {
        highlightColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        tabWidth: { value: 'auto' },
      },
    },
  },
  {
    name: 'Timer',
    displayName: '定时器',
    description: '像秒表的定时器',
    component: 'Timer',
    defaultSize: {
      width: 11,
      height: 128,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'string' },
        },
      },
      type: {
        type: 'select',
        displayName: 'Timer type',
        options: [
          { name: '秒表', value: 'countUp' },
          { name: '倒计时', value: 'countDown' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    validation: {},
    events: {
      onStart: { displayName: '启动时' },
      onResume: { displayName: '恢复时' },
      onPause: { displayName: '暂停时' },
      onCountDownFinish: { displayName: '倒计时完成时' },
      onReset: { displayName: '重置时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: '',
    },
    definition: {
      validation: {},
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        value: {
          value: '00:00:00:000',
        },
        type: {
          value: 'countUp',
        },
      },
      defaults: [
        {
          type: 'countUp',
          value: '00:00:00:000',
          paramName: 'value',
        },
        {
          type: 'countDown',
          value: '00:00:10:000',
          paramName: 'value',
        },
      ],
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Listview',
    displayName: '列表视图',
    description: '多个组件的包装器',
    defaultSize: {
      width: 20,
      height: 300,
    },
    defaultChildren: [
      {
        componentName: 'Image',
        layout: {
          top: 15,
          left: 6.976744186046512,
          height: 100,
        },
        properties: ['source'],
        accessorKey: 'imageURL',
      },
      {
        componentName: 'Text',
        layout: {
          top: 50,
          left: 27,
          height: 30,
        },
        properties: ['text'],
        accessorKey: 'text',
      },
      {
        componentName: 'Button',
        layout: {
          top: 50,
          left: 60,
          height: 30,
        },
        incrementWidth: 2,
        properties: ['text'],
        accessorKey: 'buttonText',
      },
    ],
    component: 'Listview',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      data: {
        type: 'code',
        displayName: 'List data',
        validation: {
          schema: { type: 'array', element: { type: 'object' } },
        },
      },
      rowHeight: {
        type: 'code',
        displayName: 'Row height',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      showBorder: {
        type: 'code',
        displayName: 'Show bottom border',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      enablePagination: {
        type: 'toggle',
        displayName: 'Enable pagination',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      rowsPerPage: {
        type: 'code',
        displayName: 'Rows per page',
        validation: {
          schema: { type: 'number' },
        },
      },
    },
    events: {
      onRowClicked: { displayName: '当点击行' },
    },
    styles: {
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'number',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    exposedVariables: {
      data: [{}],
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        data: {
          value: `{{[
  { imageURL: 'https://www.svgrepo.com/show/34217/image.svg', text: 'Sample text 1', buttonText: 'Button 1' },
    { imageURL: 'https://www.svgrepo.com/show/34217/image.svg', text: 'Sample text 1', buttonText: 'Button 2' },
    { imageURL: 'https://www.svgrepo.com/show/34217/image.svg', text: 'Sample text 1', buttonText: 'Button 3' },
  ]}}`,
        },
        rowHeight: {
          value: '100',
        },
        visible: { value: '{{true}}' },
        showBorder: { value: '{{true}}' },
        rowsPerPage: { value: '{{10}}' },
        enablePagination: { value: '{{false}}' },
      },
      events: [],
      styles: {
        backgroundColor: { value: '#fff' },
        borderColor: { value: '#dadcde' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{0}}' },
      },
    },
  },
  {
    name: 'Tags',
    displayName: '标签',
    description: '内容可以显示为标签',
    component: 'Tags',
    defaultSize: {
      width: 8,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      data: {
        type: 'code',
        displayName: 'Tags',
        validation: {
          schema: {
            type: 'array',
            element: {
              type: 'object',
              object: { title: { type: 'string' }, color: { type: 'string' }, textColor: { type: 'string' } },
            },
          },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        data: {
          value:
            "{{ [ \n\t\t{ title: 'success', color: '#2fb344', textColor: '#fff' }, \n\t\t{ title: 'info', color: '#206bc4', textColor: '#fff'  }, \n\t\t{ title: 'warning', color: '#f59f00', textColor: '#fff'  }, \n\t\t{ title: 'danger', color: '#d63939', textColor: '#fff' } ] }}",
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Pagination',
    displayName: '分页',
    description: '分页组件 ',
    component: 'Pagination',
    defaultSize: {
      width: 10,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      numberOfPages: {
        type: 'code',
        displayName: 'Number of pages',
        validation: {
          schema: { type: 'number' },
        },
      },
      defaultPageIndex: {
        type: 'code',
        displayName: 'Default page index',
        validation: {
          schema: { type: 'number' },
        },
      },
    },
    validation: {},
    events: {
      onPageChange: { displayName: '页码改变时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      totalPages: null,
      currentPageIndex: null,
    },
    definition: {
      validation: {},
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        numberOfPages: {
          value: '{{5}}',
        },
        defaultPageIndex: {
          value: '{{1}}',
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'CircularProgressbar',
    displayName: '圆形进度条',
    description: '使用圆形进度条显示进度',
    component: 'CircularProgressBar',
    defaultSize: {
      width: 7,
      height: 50,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      text: {
        type: 'code',
        displayName: 'Text',
        validation: {
          schema: { type: 'string' },
        },
      },
      progress: {
        type: 'code',
        displayName: 'Progress',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    events: {},
    styles: {
      color: {
        type: 'color',
        displayName: 'Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textSize: {
        type: 'code',
        displayName: 'Text Size',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      strokeWidth: {
        type: 'code',
        displayName: 'Stroke Width',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      counterClockwise: {
        type: 'code',
        displayName: 'Counter Clockwise',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      circleRatio: {
        type: 'code',
        displayName: 'Circle Ratio',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        text: {
          value: '',
        },
        progress: {
          value: '{{50}}',
        },
      },
      events: [],
      styles: {
        color: { value: '' },
        textColor: { value: '' },
        textSize: { value: '{{16}}' },
        strokeWidth: { value: '{{8}}' },
        counterClockwise: { value: '{{false}}' },
        circleRatio: { value: '{{1}}' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Spinner',
    displayName: '加载态',
    description: '可用于显示加载状态',
    component: 'Spinner',
    defaultSize: {
      width: 4,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {},
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      colour: {
        type: 'color',
        displayName: 'Colour',
        validation: {
          schema: { type: 'string' },
        },
      },
      size: {
        type: 'select',
        displayName: 'Size',
        options: [
          { name: '小', value: 'sm' },
          { name: '大', value: 'lg' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {},
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        size: { value: 'sm' },
        colour: { value: '#0565ff' },
      },
    },
  },
  {
    name: 'Statistics',
    displayName: '统计数据',
    description: '用于显示不同的统计信息',
    component: 'Statistics',
    defaultSize: {
      width: 9.2,
      height: 152,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      primaryValueLabel: {
        type: 'code',
        displayName: 'Primary value label',
        validation: { schema: { type: 'string' } },
      },
      primaryValue: { type: 'code', displayName: 'Primary value', validation: { schema: { type: 'string' } } },
      hideSecondary: {
        type: 'toggle',
        displayName: 'Hide secondary value',
        validation: { schema: { type: 'boolean' } },
      },
      secondaryValueLabel: {
        type: 'code',
        displayName: 'Secondary value label',
        validation: { schema: { type: 'string' } },
      },
      secondaryValue: { type: 'code', displayName: 'Secondary value', validation: { schema: { type: 'string' } } },
      secondarySignDisplay: {
        type: 'select',
        displayName: 'Secondary sign display',
        options: [
          { name: '上升', value: 'positive' },
          { name: '下降', value: 'negative' },
        ],
        validation: { schema: { type: 'string' } },
      },
      loadingState: { type: 'toggle', displayName: 'Loading State', validation: { schema: { type: 'boolean' } } },
    },
    events: {},
    styles: {
      primaryLabelColour: {
        type: 'color',
        displayName: 'Primary Label Colour',
        validation: { schema: { type: 'string' } },
      },
      primaryTextColour: {
        type: 'color',
        displayName: 'Primary Text  Colour',
        validation: { schema: { type: 'string' } },
      },
      secondaryLabelColour: {
        type: 'color',
        displayName: 'Secondary Label Colour',
        validation: { schema: { type: 'string' } },
      },
      secondaryTextColour: {
        type: 'color',
        displayName: 'Secondary Text Colour',
        validation: { schema: { type: 'string' } },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: { schema: { type: 'boolean' } },
      },
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        primaryValueLabel: { value: '本月收入' },
        primaryValue: { value: '682.3' },
        secondaryValueLabel: { value: '上个月' },
        secondaryValue: { value: '2.85' },
        secondarySignDisplay: { value: 'positive' },
        loadingState: { value: `{{false}}` },
      },
      events: [],
      styles: {
        primaryLabelColour: { value: '#8092AB' },
        primaryTextColour: { value: '#000000' },
        secondaryLabelColour: { value: '#8092AB' },
        secondaryTextColour: { value: '#36AF8B' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'RangeSlider',
    displayName: '范围滑块',
    description: '可用于显示有范围的滑块',
    component: 'RangeSlider',
    defaultSize: {
      width: 9,
      height: 30,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      min: {
        type: 'number',
        displayName: 'Min',
        validation: {
          schema: { type: 'number' },
        },
      },
      max: {
        type: 'number',
        displayName: 'Max',
        validation: {
          schema: { type: 'number' },
        },
      },
      value: {
        type: 'code',
        displayName: 'Value',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      enableTwoHandle: {
        type: 'toggle',
        displayName: 'Two handles',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      lineColor: {
        type: 'color',
        displayName: 'Line color',
        validation: {
          schema: { type: 'string' },
        },
      },
      handleColor: {
        type: 'color',
        displayName: 'Handle color',
        validation: {
          schema: { type: 'string' },
        },
      },
      trackColor: {
        type: 'color',
        displayName: 'Track color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'code',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: null,
    },
    definition: {
      others: {
        showOnDesktop: { value: true },
        showOnMobile: { value: false },
      },
      properties: {
        min: {
          value: '{{0}}',
        },
        max: {
          value: '{{100}}',
        },
        value: {
          value: '{{50}}',
        },
        enableTwoHandle: { value: false },
      },
      events: [],
      styles: {
        lineColor: { value: '' },
        handleColor: { value: '' },
        trackColor: { value: '' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Timeline',
    displayName: '时间线',
    description: '时间序列的可视化显示',
    component: 'Timeline',
    properties: {
      data: {
        type: 'code',
        displayName: 'Timeline data',
        validation: {
          schema: { type: 'array', element: { type: 'object' } },
        },
      },
      hideDate: {
        type: 'toggle',
        displayName: 'Hide Date',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    defaultSize: {
      width: 20,
      height: 270,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: { onClick: { displayName: '单击时' } },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: { schema: { type: 'boolean' } },
      },
      fontColor: {
        type: 'color',
        displayName: '标题字体颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    exposedVariables: {
      clickedItem: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        data: {
          value:
            "{{ [ \n\t\t{ title: '产品发布', subTitle: '我们产品的第一个版本向公众发布', date: '2021/01/03', iconBackgroundColor: '#4d72fa'},\n\t\t { title: '首次注册', subTitle: '祝贺我们第一次注册', date: '2021/10/22', iconBackgroundColor: '#4d72fa'}, \n\t\t { title: '首次付款', subTitle: '万岁！我们拿到了第一笔付款', date: '2022/07/09', iconBackgroundColor: '#4d72fa'} \n] }}",
        },
        hideDate: { value: '{{false}}' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        fontColor: { value: '#000' },
      },
    },
  },
  {
    name: 'SvgImage',
    displayName: 'Svg图标',
    description: '显示SVG图标',
    component: 'SvgImage',
    properties: {
      data: {
        type: 'code',
        displayName: 'Svg  data',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    defaultSize: {
      width: 4,
      height: 50,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        data: {
          value:
            '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><line x1="14" y1="7" x2="20" y2="7" /><line x1="17" y1="4" x2="17" y2="10" /></svg>',
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Html',
    displayName: 'HTML查看器',
    description: 'HTML查看器',
    component: 'Html',
    defaultSize: {
      width: 10,
      height: 310,
    },
    properties: {
      rawHtml: {
        type: 'code',
        displayName: 'Raw HTML',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        rawHtml: {
          value: `<body><main><section class="hero" style="height:306px;display: flex;
          justify-content: center;padding:0 1px;align-items: center;text-align:center">您可以在此处创建自定义的html-css模板</section></main></body>`,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'VerticalDivider',
    displayName: '垂直分隔线',
    description: '组件之间的垂直分隔线',
    component: 'VerticalDivider',
    defaultSize: {
      width: 2,
      height: 100,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {},
    events: {},
    styles: {
      dividerColor: {
        type: 'color',
        displayName: 'Divider Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      value: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {},
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        dividerColor: { value: '#000000' },
      },
    },
  },
  {
    name: 'CustomComponent',
    displayName: '自定义组件',
    description: '添加您的自定义组件',
    component: 'CustomComponent',
    properties: {
      data: { type: 'code', displayName: '数据', validation: { schema: { type: 'object' } } },
      code: { type: 'code', displayName: '代码' },
    },
    defaultSize: {
      width: 20,
      height: 140,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: { schema: { type: 'boolean' } },
      },
    },
    exposedVariables: {
      data: { value: `{{{ title: 'Hi! There', buttonText: 'Update Title'}}}` },
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        visible: { value: '{{true}}' },
        data: {
          value: `{{{ title: '看这里！！', buttonText: '更新标题'}}}`,
        },
        code: {
          value: `import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { Button, Container } from 'https://cdn.skypack.dev/@material-ui/core';
const MyCustomComponent = ({data, updateData, runQuery}) => (
  <Container>
      <h1>{data.title}</h1>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => {updateData({title: '我变了！'})}}
      >
        {data.buttonText}
      </Button>
    </Container>
);
const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
ReactDOM.render(<ConnectedComponent />, document.body);`,
          skipResolve: true,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'ButtonGroup',
    displayName: '按钮组',
    description: '按钮组',
    component: 'ButtonGroup',
    properties: {
      label: {
        type: 'code',
        displayName: 'label',
        validation: {
          schema: { type: 'string' },
        },
      },
      values: {
        type: 'code',
        displayName: 'values',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
          },
        },
      },
      labels: {
        type: 'code',
        displayName: 'Labels',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
          },
        },
      },
      defaultSelected: {
        type: 'code',
        displayName: 'Default selected',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'array', element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] } }],
          },
        },
      },
      multiSelection: {
        type: 'toggle',
        displayName: 'Enable multiple selection',

        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    defaultSize: {
      width: 12,
      height: 80,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {
      onClick: { displayName: '单击时' },
    },
    styles: {
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'number',
        displayName: 'Border radius',
        validation: {
          schema: { type: 'number' },
          defaultValue: false,
        },
      },
      selectedTextColor: {
        type: 'color',
        displayName: 'Selected text colour',
        validation: {
          schema: { type: 'string' },
        },
      },
      selectedBackgroundColor: {
        type: 'color',
        displayName: 'Selected background color',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    exposedVariables: {
      selected: [1],
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: `按钮组` },
        defaultSelected: { value: '{{[1]}}' },
        values: { value: '{{[1,2,3]}}' },
        labels: { value: '{{[]}}' },
        multiSelection: { value: '{{false}}' },
      },
      events: [],
      styles: {
        backgroundColor: { value: '' },
        textColor: { value: '' },
        visibility: { value: '{{true}}' },
        borderRadius: { value: '{{0}}' },
        disabledState: { value: '{{false}}' },
        selectedTextColor: { value: '' },
        selectedBackgroundColor: { value: '' },
      },
    },
  },
  {
    name: 'PDF',
    displayName: 'PDF',
    description: '嵌入pdf文件',
    component: 'PDF',
    properties: {
      url: { type: 'code', displayName: 'File URL', validation: { schema: { type: 'string' } } },
      scale: { type: 'toggle', displayName: 'Scale page to width', validation: { schema: { type: 'boolean' } } },
      pageControls: { type: 'toggle', displayName: 'Show page controls', validation: { schema: { type: 'boolean' } } },
      showDownloadOption: {
        type: 'toggle',
        displayName: '显示下载按钮',
        validation: { schema: { type: 'boolean' } },
      },
    },
    defaultSize: {
      width: 20,
      height: 640,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: { schema: { type: 'boolean' } },
      },
    },
    exposedVariables: {},
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        url: {
          value:
            'https://upload.wikimedia.org/wikipedia/commons/e/ee/Guideline_No._GD-Ed-2214_Marman_Clamp_Systems_Design_Guidelines.pdf',
        },
        scale: {
          value: '{{true}}',
        },
        pageControls: {
          value: `{{true}}`,
        },
        showDownloadOption: {
          value: `{{true}}`,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },

  {
    name: 'Steps',
    displayName: '步骤',
    description: '步骤',
    component: 'Steps',
    properties: {
      steps: {
        type: 'code',
        displayName: 'Steps',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'object', object: { id: { type: 'number' } } },
          },
        },
      },
      currentStep: {
        type: 'code',
        displayName: 'Current step',
        validation: {
          schema: { type: 'number' },
        },
      },
      stepsSelectable: {
        type: 'toggle',
        displayName: 'Steps selectable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    defaultSize: {
      width: 22,
      height: 38,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {
      onSelect: { displayName: '选择时' },
    },
    styles: {
      color: {
        type: 'color',
        displayName: 'Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textColor: {
        type: 'color',
        displayName: 'Text color',
        validation: {
          schema: { type: 'string' },
        },
      },
      theme: {
        type: 'select',
        displayName: 'Theme',
        options: [
          { name: '标题', value: 'titles' },
          { name: '数字', value: 'numbers' },
          { name: '简洁', value: 'plain' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      currentStepId: '3',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        steps: {
          value: `{{ [{ name: '步骤1', tooltip: '这是步骤1', id: 1},{ name: '步骤2', tooltip: '这是步骤2', id: 2},{ name: '步骤3', tooltip: '这是步骤3', id: 3},{ name: '步骤4', tooltip: '这是步骤4', id: 4},{ name: '步骤5', tooltip: '这是步骤5', id: 5}]}}`,
        },
        currentStep: { value: '{{3}}' },
        stepsSelectable: { value: true },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        theme: { value: 'titles' },
        color: { value: '' },
        textColor: { value: '' },
      },
    },
  },
  {
    name: 'KanbanBoard',
    displayName: '看板',
    description: '看板组件',
    component: 'KanbanBoard',
    defaultSize: {
      width: 40,
      height: 490,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      columns: { type: 'code', displayName: 'Columns' },
      cardData: { type: 'code', displayName: 'Card Data' },
      enableAddCard: { type: 'toggle', displayName: 'Enable Add Card' },
    },
    events: {
      onCardAdded: { displayName: '卡片添加时' },
      onCardRemoved: { displayName: '卡片删除时' },
      onCardMoved: { displayName: '卡片移动时' },
      onCardSelected: { displayName: '卡片选择时' },
      onCardUpdated: { displayName: '卡片更新时' },
    },
    styles: {
      disabledState: { type: 'toggle', displayName: 'Disable' },
      visibility: { type: 'toggle', displayName: 'Visibility' },
      width: { type: 'number', displayName: 'Width' },
      minWidth: { type: 'number', displayName: 'Min Width' },
      accentColor: { type: 'color', displayName: 'Accent color' },
    },
    exposedVariables: {
      columns: {},
      lastAddedCard: {},
      lastRemovedCard: {},
      lastCardMovement: {},
      lastUpdatedCard: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        columns: {
          value: '{{[{ "id": "1", "title": "待办" },{ "id": "2", "title": "办理中" },{ "id": "3", "title": "已完成" }]}}',
        },
        cardData: {
          value:
            '{{[{ id: "01", title: "待办1", columnId: "1" },{ id: "02", title: "待办2", columnId: "1" },{ id: "03", title: "待办3", columnId: "2" },{ id: "03", title: "待办4", columnId: "3" }]}}',
        },
        enableAddCard: {
          value: `{{true}}`,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        width: { value: '{{400}}' },
        minWidth: { value: '{{200}}' },
        textColor: { value: '' },
      },
    },
  },
  {
    name: 'Kanban',
    displayName: '看板',
    description: '看板组件',
    component: 'Kanban',
    defaultSize: {
      width: 40,
      height: 490,
    },
    defaultChildren: [
      {
        componentName: 'Text',
        layout: {
          top: 20,
          left: 4,
          height: 30,
        },
        properties: ['text'],
        accessorKey: 'text',
        styles: ['fontWeight', 'textSize', 'textColor'],
        defaultValue: {
          text: '{{cardData.title}}',
          fontWeight: 'bold',
          textSize: 16,
          textColor: '#000',
        },
      },
      {
        componentName: 'Text',
        layout: {
          top: 50,
          left: 4,
          height: 30,
        },
        properties: ['text'],
        accessorKey: 'text',
        styles: ['textSize', 'textColor'],
        defaultValue: {
          text: '{{cardData.description}}',
          textSize: 14,
          textColor: '#000',
        },
      },
    ],
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      columnData: { type: 'code', displayName: 'Column Data' },
      cardData: { type: 'code', displayName: 'Card Data' },
      cardWidth: {
        type: 'code',
        displayName: 'Card Width',
        validation: {
          schema: { type: 'number' },
        },
      },
      cardHeight: {
        type: 'code',
        displayName: 'Card Height',
        validation: {
          schema: { type: 'number' },
        },
      },
      enableAddCard: { type: 'toggle', displayName: 'Enable Add Card' },
      showDeleteButton: { type: 'toggle', displayName: 'Show Delete Button' },
    },
    events: {
      onUpdate: { displayName: '更新时' },
      onAddCardClick: { displayName: '添加卡片时' },
      onCardRemoved: { displayName: '卡片删除时' },
      onCardAdded: { displayName: '卡片添加时' },
      onCardMoved: { displayName: '卡片移动时' },
      onCardSelected: { displayName: '选择卡片时' },
    },
    styles: {
      disabledState: { type: 'toggle', displayName: 'Disable' },
      visibility: { type: 'toggle', displayName: 'Visibility' },
      accentColor: { type: 'color', displayName: 'Accent color' },
    },
    actions: [
      {
        handle: 'addCard',
        displayName: '添加卡片',
        params: [
          {
            handle: 'cardDetails',
            displayName: 'Card Details',
            defaultValue: `{{{ id: "c11", title: "Title 11", description: "Description 11", columnId: "r3" }}}`,
          },
        ],
      },
      {
        handle: 'deleteCard',
        displayName: '删除卡片',
        params: [
          { handle: 'id', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` },
        ],
      },
      {
        handle: 'moveCard',
        displayName: '移动卡片',
        params: [
          { handle: 'cardId', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` },
          { handle: 'columnId', displayName: 'Destination Column Id', defaultValue: '' },
        ],
      },
      {
        handle: 'updateCardData',
        displayName: '更新卡片数据',
        params: [
          { handle: 'id', displayName: 'Card Id', defaultValue: `{{components.kanban1?.lastSelectedCard?.id}}` },
          {
            handle: 'value',
            displayName: 'Value',
            defaultValue: `{{{...components.kanban1?.lastSelectedCard, title: 'New Title'}}}`,
          },
        ],
      },
    ],
    exposedVariables: {
      updatedCardData: {},
      lastAddedCard: {},
      lastRemovedCard: {},
      lastCardMovement: {},
      lastSelectedCard: {},
      lastUpdatedCard: {},
      lastCardUpdate: [],
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        columnData: {
          value:
            '{{[{ "id": "r1", "title": "待办" },{ "id": "r2", "title": "进行中" },{ "id": "r3", "title": "已完成" }]}}',
        },
        cardData: {
          value:
            '{{[{ id: "c1", title: "标题 1", description: "描述 1", columnId: "r1" },{ id: "c2", title: "标题 2", description: "描述 2", columnId: "r1" },{ id: "c3", title: "标题 3", description: "描述 3",columnId: "r2" },{ id: "c4", title: "标题 4", description: "描述 4",columnId: "r3" },{ id: "c5", title: "标题 5", description: "描述 5",columnId: "r3" }, { id: "c6", title: "标题 6", description: "描述 6", columnId: "r1" },{ id: "c7", title: "标题 7", description: "描述 7", columnId: "r1" },{ id: "c8", title: "标题 8", description: "描述 8",columnId: "r2" },{ id: "c9", title: "标题 9", description: "描述 9",columnId: "r3" },{ id: "c10", title: "标题 10", description: "描述 10",columnId: "r3" }]}}',
        },
        cardWidth: {
          value: '{{295}}',
        },
        cardHeight: {
          value: '{{100}}',
        },
        enableAddCard: {
          value: `{{true}}`,
        },
        showDeleteButton: {
          value: `{{true}}`,
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        accentColor: { value: '#4d72fa' },
      },
    },
  },
  {
    name: 'ColorPicker',
    displayName: '颜色选择器',
    description: '颜色选择器调色板',
    component: 'ColorPicker',
    properties: {
      defaultColor: { type: 'color', displayName: 'Default Color' },
    },
    defaultSize: {
      width: 9,
      height: 40,
    },
    actions: [
      {
        displayName: '设置颜色',
        handle: 'setColor',
        params: [{ handle: 'color', displayName: '颜色', defaultValue: '#ffffff', type: 'color' }],
      },
    ],
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      visibility: { type: 'toggle', displayName: 'Visibility' },
    },
    exposedVariables: {
      selectedColorHex: '#000000',
      selectedColorRGB: 'rgb(0,0,0)',
      selectedColorRGBA: 'rgba(0, 0, 0, 1)',
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        defaultColor: {
          value: '#000000',
        },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'TreeSelect',
    displayName: '树形选择',
    description: '从树视图中选择值',
    defaultSize: {
      width: 12,
      height: 200,
    },
    component: 'TreeSelect',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      label: { type: 'code', displayName: 'Title' },
      data: { type: 'code', displayName: 'Structure' },
      checkedData: { type: 'code', displayName: 'Checked Values' },
      expandedData: { type: 'code', displayName: 'Expanded Values' },
    },
    events: {
      onChange: { displayName: '内容改变时' },
      onCheck: { displayName: '选中时' },
      onUnCheck: { displayName: '取消选中时' },
    },
    styles: {
      textColor: { type: 'color', displayName: 'Text Color' },
      checkboxColor: { type: 'color', displayName: 'Checkbox Color' },
      visibility: { type: 'toggle', displayName: 'Visibility' },
      disabledState: { type: 'toggle', displayName: 'Disable' },
    },
    exposedVariables: {
      checked: ['asia', 'china', 'beijing', 'shanghai', 'japan', 'india', 'delhi', 'mumbai', 'bengaluru'],
      expanded: ['asia'],
      checkedPathArray: [
        ['asia'],
        ['asia', 'china'],
        ['asia', 'china', 'beijing'],
        ['asia', 'china', 'shanghai'],
        ['asia', 'japan'],
        ['asia', 'india'],
        ['asia', 'india', 'delhi'],
        ['asia', 'india', 'mumbai'],
        ['asia', 'india', 'bengaluru'],
      ],
      checkedPathStrings: [
        'asia',
        'asia-china',
        'asia-china-beijing',
        'asia-china-shanghai',
        'asia-japan',
        'asia-india',
        'asia-india-delhi',
        'asia-india-mumbai',
        'asia-india-bengaluru',
      ],
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        label: { value: '国家列表' },
        data: {
          value:
            '{{[{"label":"亚洲","value":"asia","children":[{"label":"中国","value":"china","children":[{"label":"北京","value":"beijing"},{"label":"上海","value":"shanghai"}]},{"label":"日本","value":"japan"},{"label":"印度","value":"india","children":[{"label":"德里","value":"delhi"},{"label":"孟买","value":"mumbai"},{"label":"班加罗尔","value":"bengaluru"}]}]},{"label":"欧洲","value":"europe","children":[{"label":"法国","value":"france"},{"label":"西班牙","value":"spain"},{"label":"英格兰","value":"england"}]},{"label":"非洲","value":"africa"}]}}',
        },
        checkedData: { value: '{{["亚洲"]}}' },
        expandedData: { value: '{{["亚洲"]}}' },
      },
      events: [],
      styles: {
        textColor: { value: '' },
        checkboxColor: { value: '' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Link',
    displayName: '链接',
    description: '向文本添加链接',
    defaultSize: {
      width: 6,
      height: 30,
    },
    component: 'Link',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      linkTarget: {
        type: 'code',
        displayName: '链接目标',
        validation: {
          schema: { type: 'string' },
        },
      },
      linkText: {
        type: 'code',
        displayName: 'Link Text',
        validation: {
          schema: { type: 'string' },
        },
      },
      targetType: {
        type: 'select',
        displayName: 'Target Type',
        options: [
          { name: '新建页面', value: 'new' },
          { name: '当前页面', value: 'same' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {
      onClick: { displayName: '单击时' },
      onHover: { displayName: '悬停时' },
    },
    styles: {
      textColor: {
        type: 'color',
        displayName: 'Text Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      textSize: {
        type: 'number',
        displayName: 'Text Size',
        validation: {
          schema: { type: 'number' },
        },
      },
      underline: {
        type: 'select',
        displayName: 'Underline',
        options: [
          { name: '从不', value: 'no-underline' },
          { name: '悬停时', value: 'on-hover' },
          { name: '始终', value: 'underline' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    actions: [
      {
        handle: 'click',
        displayName: '点击',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        linkTarget: { value: 'https://www.baidu.com/' },
        linkText: { value: '点我' },
        targetType: { value: 'new' },
      },
      events: [],
      styles: {
        textColor: { value: '#375FCF' },
        textSize: { value: 14 },
        underline: { value: 'on-hover' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Icon',
    displayName: '图标',
    description: '图标组件',
    defaultSize: {
      width: 5,
      height: 48,
    },
    component: 'Icon',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      icon: {
        type: 'iconPicker',
        displayName: 'Icon',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {
      onClick: { displayName: '单击时' },
      onHover: { displayName: '悬停时' },
    },
    styles: {
      iconColor: {
        type: 'color',
        displayName: 'Icon Color',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {},
    actions: [
      {
        handle: 'click',
        displayName: '点击',
      },
      {
        displayName: 'Set Visibility',
        handle: 'setVisibility',
        params: [{ handle: 'value', displayName: 'Value', defaultValue: '{{true}}', type: 'toggle' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        icon: { value: 'IconHome2' },
      },
      events: [],
      styles: {
        iconColor: { value: '#000' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'Form',
    displayName: '表单',
    description: '提交表单',
    defaultSize: {
      width: 13,
      height: 330,
    },
    defaultChildren: [
      {
        componentName: 'Text',
        layout: {
          top: 40,
          left: 10,
          height: 30,
          width: 17,
        },
        properties: ['text'],
        styles: ['fontWeight', 'textSize', 'textColor'],
        defaultValue: {
          text: '用户详细信息',
          fontWeight: 'bold',
          textSize: 20,
          textColor: '#000',
        },
      },
      {
        componentName: 'Text',
        layout: {
          top: 90,
          left: 10,
          height: 30,
        },
        properties: ['text'],
        defaultValue: {
          text: '姓名',
        },
      },
      {
        componentName: 'Text',
        layout: {
          top: 160,
          left: 10,
          height: 30,
        },
        properties: ['text'],
        defaultValue: {
          text: '年龄',
        },
      },
      {
        componentName: 'TextInput',
        layout: {
          top: 120,
          left: 10,
          height: 30,
          width: 25,
        },
        properties: ['placeholder'],
        defaultValue: {
          placeholder: '输入您的姓名',
        },
      },
      {
        componentName: 'NumberInput',
        layout: {
          top: 190,
          left: 10,
          height: 30,
          width: 25,
        },
        properties: ['value'],
        styles: ['borderColor'],
        defaultValue: {
          value: 24,
          borderColor: '#dadcde',
        },
      },
      {
        componentName: 'Button',
        layout: {
          top: 240,
          left: 10,
          height: 30,
          width: 10,
        },
        properties: ['text'],
        defaultValue: {
          text: '提交',
        },
      },
    ],
    component: 'Form',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      buttonToSubmit: {
        type: 'select',
        displayName: '提交表单的按钮',
        options: [{ name: '无', value: 'none' }],
        validation: {
          schema: { type: 'string' },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading state',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onSubmit: { displayName: '提交时' },
      onInvalid: { displayName: '无效时' },
    },
    styles: {
      backgroundColor: {
        type: 'color',
        displayName: 'Background color',
        validation: {
          schema: { type: 'string' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border Radius',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    exposedVariables: {
      data: {},
      isValid: true,
    },
    actions: [
      {
        handle: 'submitForm',
        displayName: '提交表单',
      },
      {
        handle: 'resetForm',
        displayName: '重置表单',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        loadingState: { value: '{{false}}' },
      },
      events: [],
      styles: {
        backgroundColor: { value: '#fff' },
        borderRadius: { value: '0' },
        borderColor: { value: '#fff' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'BoundedBox',
    displayName: '图片标注组件',
    description: '图像标注组件',
    component: 'BoundedBox',
    defaultSize: {
      width: 30,
      height: 420,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      imageUrl: {
        type: 'code',
        displayName: '图片地址',
        validation: {
          schema: { type: 'string' },
        },
      },
      selector: {
        type: 'select',
        displayName: '标注方式',
        options: [
          { name: '矩形', value: 'RECTANGLE' },
          { name: '点位', value: 'POINT' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      labels: {
        type: 'code',
        displayName: '标签列表',
        validation: {
          schema: { type: 'array' },
          element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
    },
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: false,
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
          defaultValue: false,
        },
      },
    },
    exposedVariables: {
      annotations: [],
    },
    actions: [],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        imageUrl: {
          value: `https://burst.shopifycdn.com/photos/three-cars-are-parked-on-stone-paved-street.jpg?width=746&format=pjpg&exif=1&iptc=1`,
        },
        selector: { value: `RECTANGLE` },
        labels: { value: `{{['树', '车', '路灯']}}` },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },

        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'QrCode',
    displayName: '二维码生成器',
    description: '自定义生成二维码的组件',
    component: 'QrCode',
    defaultSize: {
      width: 6,
      height: 180,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      qrType: {
        type: 'select',
        displayName: '二维码渲染类型',
        options: [
          { name: 'SVG模式', value: 'svg' },
          { name: 'Canvas模式', value: 'canvas' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      level: {
        type: 'select',
        displayName: '纠错等级',
        options: [
          { name: '低', value: 'L' },
          { name: '中', value: 'M' },
          { name: '高', value: 'H' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      value: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: { type: 'string' },
        },
      },
      qrColor: {
        type: 'color',
        displayName: '二维码填充颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      qrBackgroundColor: {
        type: 'color',
        displayName: '二维码背景色填充颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      borderRadius: {
        type: 'code',
        displayName: 'Border Radius',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] },
        },
      },
      padding: {
        type: 'code',
        displayName: 'Padding',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'number' }, { type: 'string' }],
          },
        },
      },
      borderColor: {
        type: 'color',
        displayName: '边框颜色',
        validation: { schema: { type: 'string' } },
      },
    },
    exposedVariables: {
      value: '欢迎使用二维码生成器',
    },
    actions: [
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [{ handle: 'text', displayName: '文本', defaultValue: 'New Text' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        value: { value: '欢迎使用二维码生成器', },
        qrColor: { value: '#000000FF' },
        qrBackgroundColor: { value: '#FFFFFFFF' },
        qrType: { value: 'svg' },
        level: { value: 'M' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        borderRadius: { value: '{{5}}' },
        padding: { value: '5' },
        borderColor: { value: '#00000020' },
      },
    },
  },
  {
    name: 'Echarts',
    displayName: 'Echarts',
    description: '显示Echarts',
    component: 'Echarts',
    defaultSize: {
      width: 20,
      height: 400,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      title: {
        type: 'code',
        displayName: 'Title',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      subTitle: {
        type: 'code',
        displayName: '副标题',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      data: {
        type: 'json',
        displayName: 'Data',
        validation: {
          schema: { type: 'union', schemas: [{ type: 'string' }, { type: 'array' }] },
        },
      },
      loadingState: {
        type: 'toggle',
        displayName: 'Loading State',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      markerColor: {
        type: 'color',
        displayName: 'Marker color',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      showXAxes: {
        type: 'toggle',
        displayName: '显示X轴',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showYAxes: {
        type: 'toggle',
        displayName: '显示Y轴',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showGridLines: {
        type: 'toggle',
        displayName: 'Show grid lines',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      type: {
        type: 'select',
        displayName: 'Chart type',
        options: [
          { name: '折线图', value: 'line' },
          { name: '柱状图', value: 'bar' },
          { name: '饼状图', value: 'pie' },
        ],
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'boolean' }, { type: 'number' }],
          },
        },
      },
      jsonDescription: {
        type: 'code',
        displayName: 'Json Description',
        validation: {
          schemas: [{ type: 'string' }, { type: 'object' }],
        },
      },
      plotFromJson: {
        type: 'toggle',
        displayName: 'Use Plotly JSON schema',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: { onClick: { displayName: '点击时' }, },
    actions: [
    ],
    styles: {
      padding: {
        type: 'code',
        displayName: 'Padding',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'number' }, { type: 'string' }],
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {
      clickItem: {},
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: '可修改标题' },
        subTitle: { value: '副标题' },
        markerColor: { value: '#CDE1F8' },
        showXAxes: { value: '{{true}}' },
        showYAxes: { value: '{{true}}' },
        showGridLines: { value: '{{true}}' },
        plotFromJson: { value: '{{false}}' },
        loadingState: { value: `{{false}}` },
        jsonDescription: {
          value: `{
            title: {
              text: '南丁格尔图'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: 'bottom'
            },
            backgroundColor:'white',
            toolbox: {
              show: true,
              feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            series: [
              {
                name: '南丁格尔图',
                type: 'pie',
                radius: [50, 150],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 50, name: '花瓣 1' },
                  { value: 43, name: '花瓣 2' },
                  { value: 35, name: '花瓣 3' },
                  { value: 27, name: '花瓣 4' },
                  { value: 21, name: '花瓣 5' },
          
                ]
              }
            ]
          }`,
        },
        type: { value: `line` },
        data: {
          value: `[
  { "x": "一月", "y": 100},
  { "x": "二月", "y": 80},
  { "x": "三月", "y": 40},
  { "x": "四月", "y": 60},
  { "x": "五月", "y": 30},
  { "x": "六月", "y": 70}
]`,
        },
      },
      events: [],
      styles: {
        padding: { value: 'auto' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'VideoPlayer',
    displayName: '视频播放器',
    description: '用于播放视频的播放器',
    component: 'VideoPlayer',
    defaultSize: {
      width: 20,
      height: 300,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      url: {
        type: 'code',
        displayName: '视频地址',
        validation: {
          schema: { type: 'string' },
        },
      },
      poster: {
        type: 'code',
        displayName: '视频海报',
        validation: {
          schema: { type: 'string' },
        },
      },
      autoPlay: {
        type: 'toggle',
        displayName: '自动播放',
        'tip': "设置自动播放后，会覆盖静音设置，强制静音播放。别问为啥，因为这个问题我也调试了一天才解决(ಥ﹏ಥ)",
        validation: {
          schema: { type: 'boolean' },
        },
      },
      muted: {
        type: 'toggle',
        displayName: '默认静音',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      loop: {
        type: 'toggle',
        displayName: '循环播放',
        tip: '设置循环播放后，将无法激发视频播放结束事件',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      autoHide: {
        type: 'toggle',
        displayName: '控制条自动隐藏',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onStart: { displayName: '播放时' },
      onPause: { displayName: '暂停时' },
      onEnded: { displayName: '结束时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {},
    actions: [
      {
        handle: 'setURL',
        displayName: '设置视频地址',
        params: [{ handle: 'setURL', displayName: '设置视频地址', defaultValue: `` }],
      },
      {
        handle: 'setPlayerState',
        displayName: '设置播放状态',
        params: [{ handle: 'setPlayerState', displayName: '设置播放状态', defaultValue: `{{true}}`, type: 'toggle' }],
      },
      {
        handle: 'toggleFullscreen',
        displayName: '切换全屏',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        url: { value: `https://assets.appsmith.com/widgets/bird.mp4` },
        poster: { value: `https://video-react.js.org/assets/poster.png` },
        loadingState: { value: `{{false}}` },
        autoPlay: { value: `{{false}}` },
        autoHide: { value: `{{true}}` },
        loop: { value: `{{false}}` },
        muted: { value: `{{false}}` },
      },
      events: [],
      styles: {
        visibility: { value: `{{true}}` },
      },
      general: {
        tooltip: {
          value: `快捷键：
播放/暂停 k/空格键
返回5秒   左箭头
返回10秒  j
前进5秒   右箭头
前进10秒  l
重启视频	home
跳到最后	end
全屏模式	f
退出全屏  esc
音量+5%	  向上箭头
音量-5%	  向下箭头
加速播放	shift +>
降低速度	shift +<`
        }
      }
    },
  },
  {
    name: 'AudioPlayer',
    displayName: '音频播放器',
    description: '用于播放音频的播放器',
    component: 'AudioPlayer',
    defaultSize: {
      width: 10,
      height: 35,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      url: {
        type: 'code',
        displayName: '音频地址',
        validation: {
          schema: { type: 'string' },
        },
      },
      autoPlay: {
        type: 'toggle',
        displayName: '自动播放',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      muted: {
        type: 'toggle',
        displayName: '默认静音',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      loop: {
        type: 'toggle',
        displayName: '循环播放',
        tip: '设置循环播放后，将无法激发视音频放结束事件',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onStart: { displayName: '播放时' },
      onPause: { displayName: '暂停时' },
      onEnded: { displayName: '结束时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    exposedVariables: {
      playerStatus: ''
    },
    actions: [
      {
        handle: 'setURL',
        displayName: '设置音频地址',
        params: [{ handle: 'setURL', displayName: '设置音频地址', defaultValue: `` }],
      },
      {
        handle: 'setPlayerState',
        displayName: '设置播放状态',
        params: [{ handle: 'setPlayerState', displayName: '设置播放状态', defaultValue: `{{true}}`, type: 'toggle' }],
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        url: { value: `https://assets.appsmith.com/widgets/birds_chirping.mp3` },
        loadingState: { value: `{{false}}` },
        autoPlay: { value: `{{false}}` },
        autoHide: { value: `{{true}}` },
        loop: { value: `{{false}}` },
        muted: { value: `{{false}}` },
      },
      events: [],
      styles: {
        visibility: { value: `{{true}}` },
      },
      general: {
        tooltip: {
          value: ``
        }
      }
    },
  },
  {
    name: 'Signature',
    displayName: '签字板',
    description: '签字板组件',
    component: 'Signature',
    defaultSize: {
      width: 15,
      height: 300,
    },
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      tipText: {
        type: 'code',
        displayName: '提示文字',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      showUndo: {
        type: 'toggle',
        displayName: '显示撤销图标',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      showClean: {
        type: 'toggle',
        displayName: '显示清除图标',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      penColor: {
        type: 'color',
        displayName: '铅笔颜色',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    actions: [],
    events: {
      onChange: { displayName: '内容改变时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        tipText: { value: '此处签名' },
        showUndo: { value: '{{true}}' },
        showClean: { value: '{{true}}' },
        penColor: { value: '#000000' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Progress',
    // 组件显示名称
    displayName: '进度条',
    // 组件描述
    description: '进度条组件',
    // 调用的组件名
    component: 'Progress',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 20,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      progress: {
        // 输入属性的输入框类型
        type: 'number',
        // 显示名称
        displayName: '进度',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      showLable: {
        type: 'toggle',
        displayName: '显示进度文本',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: {},
    styles: {
      color: {
        type: 'select',
        displayName: '进度条类型',
        options: [
          { name: '成功', value: 'success' },
          { name: '消息', value: 'info' },
          { name: '警告', value: 'warning' },
          { name: '危险', value: 'danger' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: '进度条背景色',
        validation: {
          schema: { type: 'string' },
        },
      },
      striped: {
        type: 'toggle',
        displayName: '显示条纹',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      animated: {
        type: 'toggle',
        displayName: '始终显示动画',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      enterAnimated: {
        type: 'toggle',
        displayName: '鼠标经过显示动画',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setPrograss',
        displayName: '设置进度',
        // 参数
        params: [
          {
            handle: 'num',
            displayName: '进度',
            defaultValue: '100',
          },
        ],
      },
    ],
    // 暴露的值，用于调用
    exposedVariables: { progress: 50 },
    // 定义默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        progress: { value: 50 },
        showLable: { value: true },
      },
      events: [],
      styles: {
        color: { value: 'info' },
        striped: { value: '{{false}}' },
        animated: { value: '{{false}}' },
        visibility: { value: '{{true}}' },
        backgroundColor: { value: '#e6e8e9' },
        enterAnimated: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Accordions',
    // 组件显示名称
    displayName: '折叠面板',
    // 组件描述
    description: '可以折叠的组件',
    // 调用的组件名
    component: 'Accordions',
    // 默认组件大小
    defaultSize: {
      width: 20,
      height: 400,
    },
    // 默认子组件
    defaultChildren: [
    ],
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {
      tabs: {
        type: 'code',
        displayName: 'Default value',
        validation: {
          schema: {
            type: 'array',
            schemas: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }],
          },
        },
      },
      defaultTab: {
        type: 'code',
        displayName: 'Default tab',
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
    },
    events: { onTabSwitch: { displayName: '选项卡切换时' } },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: 'Disable',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: '折叠体背景色',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      widgetColor: {
        type: 'color',
        displayName: '组件背景色',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    actions: [],
    exposedVariables: { currentIndex: '0' },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        tabs: {
          value:
            "{{[ \n\t\t '主页', \n\t\t '展示', \n\t\t '设置' \n ]}}",
        },
        defaultTab: { value: '0' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        backgroundColor: { value: '#ffffff' },
        widgetColor: { value: '#ffffffff' },
      },
    },
  },
  {
    // 组件名称
    name: 'Badges',
    // 组件显示名称
    displayName: '角标文本',
    // 组件描述
    description: '带角标的文本组件组件',
    // 调用的组件名
    component: 'Badges',
    // 默认组件大小
    defaultSize: {
      width: 5,
      height: 30,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      texts: {
        type: 'code',
        displayName: '文本内容',
        validation: {
          schema: { type: 'string' },
        },
      },
      title: {
        type: 'code',
        displayName: '角标内容',
        validation: {
          schema: { type: 'string' },
        },
      },
      handleClick: {
        type: 'toggle',
        displayName: '响应鼠标点击',
        validation: {
          schema: { type: 'boolean' },
        },
      },
    },
    events: {
      onClick: { displayName: '点击时' },
    },
    styles: {
      textSize: {
        type: 'select',
        displayName: '文本大小',
        options: [
          { name: 'H1', value: '1' },
          { name: 'H2', value: '2' },
          { name: 'H3', value: '3' },
          { name: 'H4', value: '4' },
          { name: 'H5', value: '5' },
          { name: 'H6', value: '6' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      badgeSize: {
        type: 'select',
        displayName: '角标大小',
        options: [
          { name: 'H1', value: '1' },
          { name: 'H2', value: '2' },
          { name: 'H3', value: '3' },
          { name: 'H4', value: '4' },
          { name: 'H5', value: '5' },
          { name: 'H6', value: '6' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      alignType: {
        type: 'select',
        displayName: '角标贴近位置',
        options: [
          { name: '顶端', value: 'flex-start' },
          { name: '底部', value: 'baseline' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      badgeFontColor: {
        type: 'select',
        displayName: '角标字体颜色',
        options: [
          { name: 'primary', value: 'primary' },
          { name: 'secondary', value: 'secondary' },
          { name: 'success', value: 'success' },
          { name: 'danger', value: 'danger' },
          { name: 'warning', value: 'warning' },
          { name: 'info', value: 'info' },
          { name: 'light', value: 'light' },
          { name: 'dark', value: 'dark' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      badgeBackgroundColor: {
        type: 'select',
        displayName: '角标背景颜色',
        options: [
          { name: 'primary', value: 'primary' },
          { name: 'secondary', value: 'secondary' },
          { name: 'success', value: 'success' },
          { name: 'danger', value: 'danger' },
          { name: 'warning', value: 'warning' },
          { name: 'info', value: 'info' },
          { name: 'light', value: 'light' },
          { name: 'dark', value: 'dark' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      pill: {
        type: 'toggle',
        displayName: '椭圆形状',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setText',
        displayName: '设置文本',
        params: [
          {
            handle: 'texts',
            displayName: '文本内容',
            defaultValue: '',
          },
        ],
      },
      {
        handle: 'setBadge',
        displayName: '设置角标',
        params: [
          {
            handle: 'Badge',
            displayName: '角标内容',
            defaultValue: '',
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      texts: '',
      Badges: '',
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        texts: { value: "你好", },
        title: { value: "New", },
        handleClick: { value: "{{false}}", },
      },
      events: [],
      styles: {
        textSize: { value: '1' },
        badgeSize: { value: '6' },
        alignType: { value: 'flex-start' },
        badgeBackgroundColor: { value: 'primary' },
        pill: { value: '{{false}}' },
        badgeFontColor: { value: 'light' },
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Carousels',
    // 组件显示名称
    displayName: '走马灯',
    // 组件描述
    description: '循环播放同一类型的图片、文字等内容的跑马灯',
    // 调用的组件名
    component: 'Carousels',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 250,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      data: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '展示内容',
        tip: 'src为图片地址;title为主标题;subTitle为副标题;fill为图片填充方式(选填)',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            // element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }
          },
        },
      },
      fade: {
        type: 'toggle',
        displayName: '渐变过渡',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      defaultIndex: {
        type: 'number',
        displayName: '默认初始序号',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      interval: {
        type: 'number',
        displayName: '切换间隔时间(毫秒)',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
    },
    events: { onTabSwitch: { displayName: '跑马灯切换时' } },
    styles: {
      dark: {
        type: 'toggle',
        displayName: '深色模式',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      fillType: {
        type: 'select',
        displayName: 'Image fit',
        options: [
          { name: '填充', value: 'fill' },
          { name: '覆盖', value: 'contain' },
          { name: '包含', value: 'cover' },
          { name: '缩小', value: 'scale-down' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      showControl: {
        type: 'toggle',
        displayName: '显示控制按钮',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showIndicators: {
        type: 'toggle',
        displayName: '显示指示器',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setIndex',
        displayName: '设置序号',
        // 参数
        params: [
          {
            handle: 'index',
            displayName: '序号',
            type: 'number',
            defaultValue: 1,
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      currentIndex: 0,
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        data: {
          value:
            `{{[ 
            { src: 'https://yun.mousheng.top/tooljet/1.jpg',title:'主标题1',subTitle:'副标题1',fill:'fill'},
            { src: 'https://yun.mousheng.top/tooljet/2.jpg',title:'主标题2',subTitle:'副标题2',fill:'scale-down'},
            { src: 'https://yun.mousheng.top/tooljet/3.jpg',title:'主标题3',subTitle:'副标题3'}
          ]}}`,
        },
        fade: { value: false },
        defaultIndex: { value: 0 },
        interval: { value: 5000 },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        showControl: { value: '{{true}}' },
        showIndicators: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        fillType: { value: '{{fill}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Autocomplete',
    // 组件显示名称
    displayName: '自动补全',
    // 组件描述
    description: '自动补全输入框',
    // 调用的组件名
    component: 'Autocomplete',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 50,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      datas: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '自动补全数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { type: 'union', schemas: [{ type: 'object' }] }
          },
        },
      },
      titleKey: {
        type: 'code',
        displayName: '主标题的键名',
        tip: '必须和自动补全数据中的键对应',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      titleDisplayName: {
        type: 'code',
        displayName: '主标题显示名称',
        tip: '主标题显示的名称，如果不想显示，可设置为-',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      subTitleKey: {
        type: 'code',
        displayName: '副标题的键名',
        tip: '必须和自动补全数据中的键对应',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      subTitleDisplayName: {
        type: 'code',
        displayName: '副标题显示名称',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      placeholder: {
        type: 'code',
        displayName: '占位符',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      searchFirstPY: {
        type: 'toggle',
        displayName: '自动匹配首拼',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      searchAllPY: {
        type: 'toggle',
        displayName: '自动匹配全拼',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      maxResults: {
        type: 'number',
        displayName: '最多显示数',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
    },
    events: {
      onSearchTextChanged: { displayName: '搜索文本改变时' },
      onSelect: { displayName: '选择选项时' },
      onFocus: { displayName: '获取焦点时' },
      onHover: { displayName: '悬停选项时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      searchText: '',
      selectedItem: {},
      hoverItem: {},
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        datas: {
          value:
            `{{[
  {
    title: '上海',
    subTitle: '上海市，简称“沪”或“申”',
  },
  {
    title: '北京',
    subTitle: '北京市，简称“京”',
  },
  {
    title: '广东',
    subTitle: '广东省，简称“粤”',
  },
]}}`,
        },
        titleKey: { value: 'title' },
        titleDisplayName: { value: '标题：' },
        subTitleKey: { value: 'subTitle' },
        subTitleDisplayName: { value: '副标题：' },
        maxResults: { value: 10 },
        placeholder: { value: '搜索' },
        searchFirstPY: { value: '{{true}}' },
        searchAllPY: { value: '{{true}}' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'RadioButtonGroup',
    // 组件显示名称
    displayName: '单选按钮组',
    // 组件描述
    description: '单选按钮组组件',
    // 调用的组件名
    component: 'RadioButtonGroup',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 50,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      radios: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '按钮组数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            // element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }
          },
        },
      },
      radioValue: {
        type: 'code',
        displayName: '默认选中项',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    events: { onSelect: { displayName: '选择时' } },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setIndex',
        displayName: '设置选中序号',
        // 参数
        params: [
          {
            handle: 'index',
            displayName: '设置序号',
            defaultValue: '1',
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      currentValue: '',
      currentName: ''
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        radios: {
          value:
            `{{[
{ name: '第一', value: '1' },
{ name: '第二', value: '2' },
{ name: '第三', value: '3' },
]}}`,
        },
        radioValue: { value: '1' },
      },
      events: [],
      styles: {
        color: { value: '#CFD1F3' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'ListGroups',
    // 组件显示名称
    displayName: '列表菜单',
    // 组件描述
    description: '列表菜单组件',
    // 调用的组件名
    component: 'ListGroups',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 250,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      listData: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '列表数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            // element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }
          },
        },
      },
      defaultActivate: {
        type: 'number',
        displayName: '默认选中',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      horizontal: {
        type: 'toggle',
        displayName: '水平布局',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      showIndex: {
        type: 'toggle',
        displayName: '显示序号',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: { onClick: { displayName: '点击事件' } },
    styles: {
      itemStyle: {
        type: 'select',
        displayName: '列表样式',
        options: [
          { name: '无', value: '' },
          { name: '主要', value: 'primary' },
          { name: '次要', value: 'secondary' },
          { name: '成功', value: 'success' },
          { name: '危险', value: 'danger' },
          { name: '警告', value: 'warning' },
          { name: '消息', value: 'info' },
          { name: '亮色', value: 'light' },
          { name: '暗色', value: 'dark' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      badgeStyle: {
        type: 'select',
        displayName: '徽标样式',
        options: [
          { name: '无', value: '' },
          { name: '主要', value: 'primary' },
          { name: '次要', value: 'secondary' },
          { name: '成功', value: 'success' },
          { name: '危险', value: 'danger' },
          { name: '警告', value: 'warning' },
          { name: '消息', value: 'info' },
          { name: '亮色', value: 'light' },
          { name: '暗色', value: 'dark' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setIndex',
        displayName: '设置选中序号',
        // 参数
        params: [
          {
            handle: 'index',
            displayName: '设置序号',
            type: 'number',
            defaultValue: 1,
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      clickIndex: 1
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        listData: {
          value:
            `{{[
  { title: '主页',subTitle:'显示主页',num:10},
  { title: '展示',subTitle:'显示内容',num:0},
  { title: '设置',subTitle:'显示设置',disabled:true} \n ]}}`,
        },
        defaultActivate: { value: 1 },
        horizontal: { value: false },
        showIndex: { value: false },
      },
      events: [],
      styles: {
        itemStyle: { value: '' },
        badgeStyle: { value: 'danger' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'NavMenu',
    // 组件显示名称
    displayName: '导航菜单',
    // 组件描述
    description: '导航菜单组件',
    // 调用的组件名
    component: 'NavMenu',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 515,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      menuData: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '菜单数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { type: 'union', schemas: [{ type: 'object' }] }
          },
        },
      },
      defaultOpenKeys: {
        type: 'code',
        displayName: '默认展开项',
        validation: {
          schema: {
            type: 'array',
          },
        },
      },
      defaultSelectedKeys: {
        type: 'code',
        displayName: '默认选中项',
        validation: {
          schema: {
            type: 'array',
          },
        },
      },
      defaultinlineCollapsed: {
        type: 'toggle',
        displayName: '默认收缩垂直菜单',
        tip: '仅在垂直布局有效',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      onlyOpenOne: {
        type: 'toggle',
        displayName: '只展开一个二级菜单',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      menuMode: {
        type: 'select',
        displayName: '菜单布局方式',
        options: [
          { name: '垂直内嵌', value: 'inline' },
          { name: '垂直弹出', value: 'vertical' },
          { name: '水平布局', value: 'horizontal' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: { onClick: { displayName: '点击时' } },
    styles: {
      color: {
        type: 'color',
        displayName: '颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setInlineCollapsed',
        displayName: '内嵌菜单缩起/展开',
        // 参数
        params: [
          {
            handle: 'status',
            displayName: '状态',
            defaultValue: '{{true}}',
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      currentKey: '',
      currentPath: [],
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        menuData: {
          value:
            `{{[
  {
      label: '首页',
      key: 'main',
      icon: 'MailOutlined',
  },
  {
      label: '展示',
      key: 'show',
      icon: 'AppstoreOutlined',
  },
  {
      label: '二级菜单1',
      key: 'submenu',
      icon: 'AppstoreOutlined',
      children: [
          {
              type: 'group',
              label: '组1',
              children: [
                  {
                      label: '选项1',
                      key: 'setting1',
                      icon: 'AppstoreOutlined',
                  },
                  {
                      label: '选项2',
                      key: 'setting2',
                  },
              ],
          },
          {
              type: 'group',
              label: '组二',
              children: [
                  {
                      label: '选项3',
                      key: 'setting3',
                  },
                  {
                      label: '选项4',
                      key: 'setting4',
                  },
              ],
          },
      ],
  },
  {
      label: '二级菜单2',
      key: 'submenu2',
      icon: 'AppstoreOutlined',
      children: [
          {
              type: 'group',
              label: '组3',
              children: [
                  {
                      label: '选项5',
                      key: 'setting5',
                      icon: 'AppstoreOutlined',
                  },
                  {
                      label: '选项6',
                      key: 'setting6',
                  },
              ],
          }
      ]
  },
  {
      label: '图标',
      key: 'icon',
      icon: 'AppstoreOutlined',
  },
]}}`,
        },
        defaultOpenKeys: { value: "{{['submenu']}}" },
        defaultSelectedKeys: { value: "{{['setting3']}}" },
        menuMode: { value: 'inline' },
        onlyOpenOne: { value: true },
        defaultinlineCollapsed: { value: false },
      },
      events: [],
      styles: {
        color: { value: '#CFD1F3' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Cascaders',
    // 组件显示名称
    displayName: '级联选择',
    // 组件描述
    description: '可从一组相关联的数据集合进行选择',
    // 调用的组件名
    component: 'Cascaders',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 36,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      options: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '选项数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { type: 'union', schemas: [{ type: 'object' }] }
          },
        },
      },
      placeholder: {
        type: 'code',
        displayName: '占位符',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      defaultValue: {
        type: 'code',
        displayName: '默认值',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }] }
          },
        },
      },
      expandTrigger: {
        type: 'select',
        displayName: '选项展开方式',
        options: [
          { name: '移入展开', value: 'hover' },
          { name: '点击展开', value: 'click' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      customMap: {
        type: 'code',
        displayName: '自定义映射键',
        validation: {
          schema: {
            type: 'object',
          },
        },
      },
      multiple: {
        type: 'toggle',
        displayName: '允许多选',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      searchAllPY: {
        type: 'toggle',
        displayName: '允许全拼搜索',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      searchFirstPY: {
        type: 'toggle',
        displayName: '允许首拼搜索',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: {
      onSelect: { displayName: '点击事件' },
      onSearchTextChanged: { displayName: '搜索文本改变时' },
    },
    styles: {
      placement: {
        type: 'select',
        displayName: '弹出位置',
        options: [
          { name: '下方靠左', value: 'bottomLeft' },
          { name: '下方靠右', value: 'bottomRight' },
          { name: '上方靠左', value: 'topLeft' },
          { name: '上方靠右', value: 'topRight' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      selectedOptions: [],
      selectValue: [],
      searchText: '',
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        options: {
          value: `{{[
          {
            value: 'zhejiang',
            label: '浙江',
            children: [
              {
                value: 'hangzhou',
                label: '杭州',
                children: [
                  {
                    value: 'xihu',
                    label: '西湖',
                  },
                  {
                    value: 'xiasha',
                    label: '下沙',
                    disabled: true,
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: '中华门',
                  },
                ],
              },
            ],
          },
          {
            value: 'bukexuan',
            label: '不可选的选项',
            children: [
              {
                value: 'test2',
                label: '测试2',
                children: [
                  {
                    value: 'ceshi3',
                    label: '测试3',
                    disabled: true,
                  },
                ],
              }
            ]
          }
        ]}}`
        },
        placeholder: { value: '请选择' },
        expandTrigger: { value: 'hover' },
        defaultValue: { value: "{{['zhejiang', 'hangzhou', 'xihu']}}" },
        customMap: { value: "{{{ label: 'label', value: 'value', children: 'children' }}}" },
        multiple: { value: false },
        searchAllPY: { value: true },
        searchFirstPY: { value: true },
      },
      events: [],
      styles: {
        placement: { value: 'bottomLeft' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'MentionsInput',
    // 组件显示名称
    displayName: '提及输入框',
    // 组件描述
    description: '可响应特定提及按键的输入框',
    // 调用的组件名
    component: 'MentionsInput',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 36,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      options: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '提及列表',
        validation: {
          schema: {
            // string/array/number
            type: 'object',
          },
        },
      },
      defaultValue: {
        type: 'code',
        displayName: '默认值',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
    },
    events: {
      onBlur: { displayName: '失去焦点时' },
      onChange: { displayName: '改变时' },
      onSelect: { displayName: '选择标签时' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      context: ''
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        options: {
          value:
            `{{{
  '@': ['张三', '李四', '王五'],
  '#': ['1.0', '2.0', '3.0'],
}}}`
        },
        defaultValue: { value: '输入@或#试试' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'AntRadio',
    // 组件显示名称
    displayName: '单选按钮组',
    // 组件描述
    description: '基于Ant的单选按钮组件',
    // 调用的组件名
    component: 'AntRadio',
    // 默认组件大小
    defaultSize: {
      width: 10,
      height: 36,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      datas: {
        // 输入属性的输入框类型，code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '单选组数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { type: 'union', schemas: [{ type: 'object' }] }
          },
        },
      },
      defaultSelectKey: {
        type: 'code',
        displayName: '默认选中的值',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      radioType: {
        type: 'select',
        displayName: '按钮类型',
        options: [
          { name: '单选', value: 'default' },
          { name: '按钮', value: 'button' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      buttonSize: {
        type: 'select',
        displayName: '按钮大小',
        options: [
          { name: '大', value: 'large' },
          { name: '中', value: 'middle' },
          { name: '小', value: 'small' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    events: {
      onChange: { displayName: '点击事件' },
    },
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setValue',
        displayName: '设置选中值',
        // 参数
        params: [
          {
            handle: 'value',
            displayName: '选中值',
            defaultValue: 'A',
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      checkedValue: ''
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        datas: {
          value: `{{[
{ label: '选项A' , value: 'A' ,},
{ label: '选项B' , value: 'B' ,},
{ label: '选项C' , value: 'C' ,}
]}}`,
        },
        defaultSelectKey: { value: 'B' },
        radioType: { value: 'default' },
        buttonSize: { value: 'middle' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Drawers',
    // 组件显示名称
    displayName: '侧边抽屉',
    // 组件描述
    description: '从屏幕边缘滑出的像抽屉一样的悬浮面板',
    // 调用的组件名
    component: 'Drawers',
    // 默认组件大小
    defaultSize: {
      width: 5,
      height: 36,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      title: {
        type: 'code',
        displayName: '抽屉标题',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      showButton: {
        type: 'toggle',
        displayName: '显示按钮',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      hiddenOnMouseOut: {
        type: 'toggle',
        displayName: '鼠标移出时隐藏(预览时生效)',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      buttonTitle: {
        type: 'code',
        displayName: '按钮标题',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      popSize: {
        type: 'select',
        displayName: '弹出组件大小',
        options: [
          { name: '正常', value: 'default' },
          { name: '加宽', value: 'large' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      placement: {
        type: 'select',
        displayName: '弹出位置',
        options: [
          { name: '左', value: 'left' },
          { name: '右(编辑时在左)', value: 'right' },
          { name: '上', value: 'top' },
          { name: '下', value: 'bottom' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
    events: {
      onClick: { displayName: '显示时' },
      onClose: { displayName: '关闭时' },
    },
    styles: {
      color: {
        type: 'color',
        displayName: '颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setStatus',
        displayName: '设置状态',
        params: [
          {
            handle: 'status',
            displayName: '状态',
            defaultValue: '{{true}}',
          },
        ],
      },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      show: false,
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: '标题' },
        placement: { value: 'left' },
        popSize: { value: 'default' },
        buttonTitle: { value: '打开抽屉' },
        showButton: { value: true },
        hiddenOnMouseOut: { value: false },
      },
      events: [],
      styles: {
        color: { value: '#CFD1F3' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Transfers',
    // 组件显示名称
    displayName: '穿梭框',
    // 组件描述
    description: '双栏穿梭选择框',
    // 调用的组件名
    component: 'Transfers',
    // 默认组件大小
    defaultSize: {
      width: 15,
      height: 250,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      datas: {
        // 输入属性的输入框类型，/code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '源数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { type: 'union', schemas: [{ type: 'string' }, { type: 'object' }] }
          },
        },
      },
      datas2: {
        type: 'code',
        displayName: '已选择',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }, { type: 'number' }] }
          },
        },
      },
      titles: {
        type: 'code',
        displayName: '标题',
        validation: {
          schema: {
            type: 'array',
            element: { type: 'union', schemas: [{ type: 'string' }] }
          },
        },
      },
      showSearch: {
        type: 'toggle',
        displayName: '显示搜索框',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      oneWay: {
        type: 'toggle',
        displayName: '单向模式',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      pagination: {
        type: 'toggle',
        displayName: '允许分页',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      pageSize: {
        type: 'number',
        displayName: '分页大小',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
    },
    // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
    events: {
      onChange: { displayName: '选项变化时' },
      onSelect: { displayName: '点击项目时' },
      onSearch: { displayName: '搜索文本改变时' },
    },
    styles: {
      color: {
        type: 'color',
        displayName: '背景颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      colorbg: {
        type: 'color',
        displayName: '前景颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
      {
        handle: 'setTargetKeys',
        displayName: '设置右边窗口项目',
        // 参数
        params: [
          {
            handle: 'keys',
            displayName: 'key值数组',
            defaultValue: '{{[]}}',
          },
        ],
      },
      {
        handle: 'setSourceSelectedKeys',
        displayName: '勾选选中项',
        // 参数
        params: [
          {
            handle: 'keys',
            displayName: 'key值数组',
            defaultValue: '{{[]}}',
          },
        ],
      },
      // {
      //   handle: 'setTargetSelectedKeys',
      //   displayName: '设置目标窗口选中项',
      //   // 参数
      //   params: [
      //     {
      //       handle: 'keys',
      //       displayName: 'key值数组',
      //       defaultValue: '{{[]}}',
      //     },
      //   ],
      // },
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      targetKeys: [],
      direction: "",
      movedKeys: [],
      sourceSelectedKeys: [],
      targetSelectedKeys: [],
      searchText: [],
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        datas: {
          value: `{{[
{key:1,title:'内容1'},
{key:2,title:'内容2'},
{key:'三',title:'内容3'},
{key:4,title:'内容4'},
{key:5,title:'内容5'},
{key:6,title:'内容6'},
{key:7,title:'内容7'},
{key:8,title:'内容8'},
{key:9,title:'内容9'},
{key:10,title:'内容10'},
]}}`,
        },
        datas2: {
          value: `{{[1,'三',5]}}`,
        },
        titles: { value: "{{['源数据', '目标']}}" },
        oneWay: { value: false },
        showSearch: { value: true },
        pageSize: { value: 10 },
        pagination: { value: false },
      },
      events: [],
      styles: {
        color: { value: '#fff' },
        colorbg: { value: '#fff' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'TimePickers',
    // 组件显示名称
    displayName: '时间选择框',
    // 组件描述
    description: '输入或选择时间的控件',
    // 调用的组件名
    component: 'TimePickers',
    // 默认组件大小
    defaultSize: {
      width: 5,
      height: 36,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      defaultValue: {
        type: 'code',
        displayName: '默认时间',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      placeholder: {
        type: 'code',
        displayName: '占位符',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      changeOnBlur: {
        type: 'toggle',
        displayName: '选择后无需确认',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      timeStep: {
        type: 'code',
        displayName: '时/分/秒步长',
        validation: {
          schema: {
            type: 'array',
            element: { schemas: [{ type: 'number' }] }
          },
        },
      },
      timeFormat: {
        type: 'select',
        displayName: '时间格式',
        options: [
          { name: 'HH:mm:ss', value: 'HH:mm:ss' },
          { name: 'HH:mm:ss a', value: 'HH:mm:ss a' },
          { name: 'HH:mm', value: 'HH:mm' },
          { name: 'HH:mm a', value: 'HH:mm a' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      rangePicker: {
        type: 'toggle',
        displayName: '时间范围选择器',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
    events: {
      onChange: { displayName: '改变时' },
    },
    styles: {
      bordered: {
        type: 'toggle',
        displayName: '无边框样式',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
      time: '',
      timeObject: null,
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        datas: {
          value: `{{[
{ title: '主页'},
{ title: '展示' },
{ title: '设置'}
]}}`,
        },
        defaultValue: { value: "{{moment().format('HH:mm:ss')}}" },
        value3: { value: 100 },
        timeFormat: { value: 'HH:mm:ss' },
        timeStep: { value: '{{[1,1,10]}}' },
        changeOnBlur: { value: true },
        rangePicker: { value: false },
        placeholder: { value: '请选择时间' },
      },
      events: [],
      styles: {
        bordered: { value: false },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    // 组件名称
    name: 'Avatars',
    // 组件显示名称
    displayName: '头像',
    // 组件描述
    description: '头像组件',
    // 调用的组件名
    component: 'Avatars',
    // 默认组件大小
    defaultSize: {
      width: 5,
      height: 150,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      src: {
        type: 'code',
        displayName: '图片',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      icon: {
        type: 'code',
        displayName: '图标',
        tip: '渲染顺序：图片>图标>文本',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      title: {
        type: 'code',
        displayName: '标题',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      counts: {
        type: 'number',
        displayName: '角标数字',
        tip: '仅允许方形状态显示',
        validation: {
          schema: {
            type: 'number',
          },
        },
      },
      shape: {
        type: 'select',
        displayName: '头像形状',
        options: [
          { name: '圆形', value: 'circle' },
          { name: '方形', value: 'square' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
    },
    // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
    events: {
      onClick: { displayName: '点击事件' },
    },
    styles: {
      color: {
        type: 'color',
        displayName: '颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      backgroundColor: {
        type: 'color',
        displayName: '背景颜色',
        validation: {
          schema: { type: 'string' },
        },
      },
      cursorPointer: {
        type: 'toggle',
        displayName: '鼠标经过变小手',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: '张三' },
        icon: { value: 'UserOutlined' },
        src: { value: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
        counts: { value: 1 },
        shape: { value: 'square' },
      },
      events: [],
      styles: {
        color: { value: '#fff' },
        backgroundColor: { value: '#bfbfbf' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        cursorPointer: { value: true },
      },
    },
  },
  {
    // 组件名称
    name: 'Description',
    // 组件显示名称
    displayName: '描述列表',
    // 组件描述
    description: '用于展示多个只读字段',
    // 调用的组件名
    component: 'Description',
    // 默认组件大小
    defaultSize: {
      width: 20,
      height: 230,
    },
    // 默认子组件
    defaultChildren: [
    ],
    // 其他选项,设置显示在桌面系统或移动平台
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    // 主属性
    properties: {
      // 属性名,传入组件的属性名
      datas: {
        // 输入属性的输入框类型，/code/toggle/color/number/select等
        type: 'code',
        // 显示名称
        displayName: '显示数据',
        validation: {
          schema: {
            // string/array/number
            type: 'array',
            // 指定子元素类型范围
            element: { schemas: [{ type: 'object' }] }
          },
        },
      },
      title: {
        type: 'code',
        displayName: '标题',
        validation: {
          schema: {
            type: 'string',
          },
        },
      },
      showEditButton: {
        type: 'toggle',
        displayName: '显示编辑按钮',
        tip:'按钮仅方便调用编辑事件，控件不能编辑',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 事件列表 /onClick/onCheck/onSearch/onChange/onSelect/onHover/onFocus/onBlur
    events: {
      onClick: { displayName: '点击编辑按钮时' },
    },
    styles: {
      bordered: {
        type: 'toggle',
        displayName: '显示边框',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      rowHeight: {
        type: 'select',
        displayName: '行高度',
        options: [
          { name: '高', value: 'default' },
          { name: '中', value: 'middle' },
          { name: '低', value: 'small' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      layout: {
        type: 'select',
        displayName: '布局方式',
        options: [
          { name: '水平布局', value: 'horizontal' },
          { name: '垂直布局', value: 'vertical' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      column: {
        type: 'number',
        displayName: '每行列数',
        validation: {
          schema: { type: 'number' },
        },
      },
      parseEnter: {
        type: 'toggle',
        displayName: '解析换行符',
        validation: {
          schema: { type: 'boolean' },
        },
      },
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
      disabledState: {
        type: 'toggle',
        displayName: '禁用',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    // 动作列表，需在组件中注册接受动作
    actions: [
    ],
    // 暴露的值，用于其他交互，组件中可用setExposedVariable设置值
    exposedVariables: {
    },
    // 定义新建组件时的默认值
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        datas: {
          value: `{{[
{ label:'姓名',value:'张三'},
{ label:'年龄',value:'15'},
{ label:'家庭住址',value:'浙江省台州市'},
{ label:'电话',value:'13888888888'},
{ label:'其他情况',value:'无'},
]}}`,
        },
        title: { value: '描述列表' },
        showEditButton: { value: true },
      },
      events: [],
      styles: {
        bordered: { value: '{{true}}' },
        layout: { value: 'horizontal' },
        rowHeight: { value: 'default' },
        column: { value: 2 },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
        parseEnter: { value: true },
      },
    },
  },
];