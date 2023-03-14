export const widgets = [
  {
    name: 'Table',
    displayName: 'Table',
    description: 'Display paginated tabular data',
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
      height: 300,
    },
    events: {
      onRowHovered: { displayName: 'Row hovered' },
      onRowClicked: { displayName: 'Row clicked' },
      onBulkUpdate: { displayName: 'Save changes' },
      onPageChanged: { displayName: 'Page changed' },
      onSearch: { displayName: 'Search' },
      onCancelChanges: { displayName: 'Cancel changes' },
      onSort: { displayName: 'Sort applied' },
      onCellValueChanged: { displayName: 'Cell value changed' },
      onFilterChanged: { displayName: 'Filter changed' },
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
        displayName: 'Set page',
        params: [
          {
            handle: 'page',
            displayName: 'Page',
            defaultValue: '{{1}}',
          },
        ],
      },
      {
        handle: 'selectRow',
        displayName: 'Select row',
        params: [
          { handle: 'key', displayName: 'Key' },
          { handle: 'value', displayName: 'Value' },
        ],
      },
      {
        handle: 'deselectRow',
        displayName: 'Deselect row',
      },
      {
        handle: 'discardChanges',
        displayName: 'Discard Changes',
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
            "{{ [ \n\t\t{ id: 1, name: 'Sarah', email: 'sarah@example.com'}, \n\t\t{ id: 2, name: 'Lisa', email: 'lisa@example.com'}, \n\t\t{ id: 3, name: 'Sam', email: 'sam@example.com'}, \n\t\t{ id: 4, name: 'Jon', email: 'jon@example.com'} \n] }}",
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
    displayName: 'Button',
    description: 'Trigger actions: queries, alerts etc',
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
        displayName: 'Click',
      },
      {
        handle: 'setText',
        displayName: 'Set Text',
        params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New Text' }],
      },
      {
        handle: 'disable',
        displayName: 'Disable',
        params: [{ handle: 'disable', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
      },
      {
        handle: 'visibility',
        displayName: 'Visibility',
        params: [{ handle: 'visible', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
      },
      {
        handle: 'loading',
        displayName: 'Loading',
        params: [{ handle: 'loading', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
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
  {
    name: 'Chart',
    displayName: 'Chart',
    description: 'Display charts',
    component: 'Chart',
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
      showAxes: {
        type: 'toggle',
        displayName: 'Show axes',
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
          { name: 'Line', value: 'line' },
          { name: 'Bar', value: 'bar' },
          { name: 'Pie', value: 'pie' },
        ],
        validation: {
          schema: {
            type: 'union',
            schemas: [{ type: 'string' }, { type: 'boolean' }, { type: 'number' }],
          },
        },
      },
      jsonDescription: {
        type: 'json',
        displayName: 'Json Description',
        validation: {
          schema: {
            type: 'string',
          },
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
    events: {},
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
      show: null,
    },
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        title: { value: '可修改标题' },
        markerColor: { value: '#CDE1F8' },
        showAxes: { value: '{{true}}' },
        showGridLines: { value: '{{true}}' },
        plotFromJson: { value: '{{false}}' },
        loadingState: { value: `{{false}}` },
        jsonDescription: {
          value: `{
            "data": [
                {
                    "x": [
                        "Jan",
                        "Feb",
                        "Mar"
                    ],
                    "y": [
                        100,
                        80,
                        40
                    ],
                    "type": "bar"
                }
            ]
        }`,
        },
        type: { value: `line` },
        data: {
          value: `[
  { "x": "Jan", "y": 100},
  { "x": "Feb", "y": 80},
  { "x": "Mar", "y": 40}
]`,
        },
      },
      events: [],
      styles: {
        padding: { value: '50' },
        visibility: { value: '{{true}}' },
        disabledState: { value: '{{false}}' },
      },
    },
  },
  {
    name: 'Modal',
    displayName: 'Modal',
    description: 'Modal triggered by events',
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
      hideOnEsc: { type: 'toggle', displayName: 'Hide on escape' },

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
        displayName: 'Open',
      },
      {
        handle: 'close',
        displayName: 'Close',
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
    displayName: 'Text Input',
    description: 'Text field for forms',
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
        displayName: 'Set text',
        params: [{ handle: 'text', displayName: 'text', defaultValue: 'New Text' }],
      },
      {
        handle: 'clear',
        displayName: 'Clear',
      },
      {
        handle: 'setFocus',
        displayName: 'Set focus',
      },
      {
        handle: 'setBlur',
        displayName: 'Set blur',
      },
      {
        handle: 'disable',
        displayName: 'Disable',
        params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
      },
      {
        handle: 'visibility',
        displayName: 'Visibility',
        params: [{ handle: 'visibility', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
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
    displayName: 'Number Input',
    description: 'Number field for forms',
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
      value: 0,
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
    displayName: 'Password Input',
    description: 'Password input field for forms',
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
    displayName: 'Date Picker',
    description: 'Select a date and time',
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
    displayName: 'Checkbox',
    description: 'A single checkbox',
    component: 'Checkbox',
    defaultSize: {
      width: 5,
      height: 30,
    },
    actions: [
      {
        handle: 'setChecked',
        displayName: 'Set checked',
        params: [{ handle: 'status', displayName: 'status' }],
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
    displayName: 'Radio Button',
    description: 'Radio buttons',
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
          schema: { type: 'boolean' },
        },
      },
      values: {
        type: 'code',
        displayName: 'Option values',
        validation: {
          schema: { type: 'array', element: { type: 'boolean' } },
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
        displayName: 'Select Option',
        params: [
          {
            handle: 'option',
            displayName: 'Option',
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
    displayName: 'Toggle Switch',
    description: 'Toggle Switch',
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
    displayName: 'Textarea',
    description: 'Text area form field',
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
        displayName: 'Set Text',
        params: [{ handle: 'text', displayName: 'text', defaultValue: 'New Text' }],
      },
      {
        handle: 'clear',
        displayName: 'Clear',
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
    displayName: 'Range Picker',
    description: 'Select a date range',
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
    displayName: 'Text',
    description: 'Display markdown or HTML',
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
        displayName: 'Set Text',
        params: [{ handle: 'text', displayName: 'Text', defaultValue: 'New text' }],
      },
      {
        handle: 'visibility',
        displayName: 'Set Visibility',
        params: [{ handle: 'visibility', displayName: 'Value', defaultValue: `{{false}}`, type: 'toggle' }],
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
      },
      events: [],
      styles: {
        backgroundColor: { value: '' },
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
    displayName: 'Image',
    description: 'Display an Image',
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
    displayName: 'Container',
    description: 'Wrapper for multiple components',
    defaultSize: {
      width: 5,
      height: 200,
    },
    component: 'Container',
    others: {
      showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
      showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
    },
    properties: {},
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
    displayName: 'Dropdown',
    description: 'Select one value from options',
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
    },
    actions: [
      {
        handle: 'selectOption',
        displayName: 'Select option',
        params: [{ handle: 'select', displayName: 'Select' }],
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
        value: { value: '{{2}}' },
        values: { value: '{{[1,2,3]}}' },
        display_values: { value: '{{["one", "two", "three"]}}' },
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
    displayName: 'Multiselect',
    description: 'Select multiple values from options',
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
        displayName: 'Select Option',
        params: [
          {
            handle: 'option',
            displayName: 'Option',
          },
        ],
      },
      {
        handle: 'deselectOption',
        displayName: 'Deselect Option',
        params: [
          {
            handle: 'option',
            displayName: 'Option',
          },
        ],
      },
      {
        handle: 'clearSelections',
        displayName: 'Clear selections',
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
        display_values: { value: '{{["one", "two", "three"]}}' },
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
    displayName: 'Text Editor',
    description: 'Rich text editor',
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
  {
    name: 'Map',
    displayName: 'Map',
    description: 'Display Google Maps',
    component: 'Map',
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
        tip: 'This location will be the initial center of the map',
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
      canSearch: {
        type: 'toggle',
        displayName: 'Search for places',
        validation: {
          schema: {
            type: 'boolean',
          },
        },
      },
    },
    events: {
      onBoundsChange: { displayName: 'On bounds change' },
      onCreateMarker: { displayName: 'On create marker' },
      onMarkerClick: { displayName: 'On marker click' },
    },
    actions: [
      {
        handle: 'setLocation',
        displayName: 'Set Location',
        params: [
          { handle: 'lat', displayName: 'Latitude' },
          { handle: 'lng', displayName: 'Longitude' },
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
          value: `{{ {"lat": 40.7128, "lng": -73.935242} }}`,
        },
        defaultMarkers: {
          value: `{{ [{"lat": 40.7128, "lng": -73.935242}] }}`,
        },
        canSearch: {
          value: `{{true}}`,
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
    displayName: 'QR Scanner',
    description: 'Scan QR codes and hold its data',
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
    displayName: 'Rating',
    description: 'Star rating',
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
    displayName: 'Divider',
    description: 'Separator between components',
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
    displayName: 'File Picker',
    description: 'File Picker',
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
        displayName: 'Clear Files',
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
    displayName: 'Calendar',
    description: 'Calendar',
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
      defaultView: { type: 'code', displayName: 'Default view' },
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
          { name: 'Compact', value: 'compact' },
          { name: 'Spacious', value: 'spacious' },
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
          value: 'YYYY-DD-MM HH:mm:ss A Z',
        },
        defaultDate: {
          value: '{{moment().format("YYYY-DD-MM HH:mm:ss A Z")}}',
        },
        events: {
          value:
            "{{[\n\t\t{\n\t\t\t title: '示例事件',\n\t\t\t start: `${moment().startOf('day').format('YYYY-DD-MM HH:mm:ss A Z')}`,\n\t\t\t end: `${moment().endOf('day').format('YYYY-DD-MM HH:mm:ss A Z')}`,\n\t\t\t allDay: false,\n\t\t\t color: '#4D72DA'\n\t\t}\n]}}",
        },
        resources: {
          value: '{{[]}}',
        },
        defaultView: {
          value: "{{'month'}}",
        },
        startTime: {
          value: "{{moment().startOf('day').format('YYYY-DD-MM HH:mm:ss A Z')}}",
        },
        endTime: {
          value: "{{moment().endOf('day').format('YYYY-DD-MM HH:mm:ss A Z')}}",
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
        cellSizeInViewsClassifiedByResource: { value: 'spacious' },
        weekDateFormat: { value: 'DD MMM' },
      },
    },
  },
  {
    name: 'Iframe',
    displayName: 'Iframe',
    description: 'Display an Iframe',
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
    displayName: 'Code Editor',
    description: 'Code Editor',
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
    name: 'Tabs',
    displayName: 'Tabs',
    description: 'Tabs component',
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
          text: 'Open-source low-code framework to build & deploy internal tools within minutes.',
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
        displayName: 'Set current tab',
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
            "{{[ \n\t\t{ title: 'Home', id: '0' }, \n\t\t{ title: 'Profile', id: '1' }, \n\t\t{ title: 'Settings', id: '2' } \n ]}}",
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
    displayName: 'Timer',
    description: 'timer',
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
    displayName: 'List View',
    description: 'Wrapper for multiple components',
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
    displayName: 'Tags',
    description: 'Content can be shown as tags',
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
    displayName: 'Pagination',
    description: 'Pagination ',
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
    displayName: 'Circular Progressbar',
    description: 'Show the progress using circular progressbar',
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
    displayName: 'Spinner',
    description: 'Spinner can be used to display loading status',
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
    displayName: 'Statistics',
    description: 'Statistics can be used to display different statistical information',
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
    displayName: 'Range Slider',
    description: 'Can be used to show slider with a range',
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
    displayName: 'Timeline',
    description: 'Visual representation of a sequence of events',
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
    events: {},
    styles: {
      visibility: {
        type: 'toggle',
        displayName: 'Visibility',
        validation: { schema: { type: 'boolean' } },
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
            "{{ [ \n\t\t{ title: '产品发布', subTitle: '我们产品的第一个版本向公众发布', date: '2021/01/03', iconBackgroundColor: '#4d72fa'},\n\t\t { title: '首次注册', subTitle: '祝贺我们第一次注册', date: '2021/10/22', iconBackgroundColor: '#4d72fa'}, \n\t\t { title: '首次付款', subTitle: '万岁！我们拿到了第一笔付款', date: '2022/07/09', iconBackgroundColor: '#4d72fa'} \n] }}",
        },
        hideDate: { value: '{{false}}' },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },
      },
    },
  },
  {
    name: 'SvgImage',
    displayName: 'Svg Image',
    description: 'Svg image',
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
    displayName: 'HTML Viewer',
    description: 'HTML Viewer',
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
    displayName: 'Vertical Divider',
    description: 'Vertical Separator between components',
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
    displayName: 'Custom Component',
    description: 'Visual representation of a sequence of events',
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
    displayName: 'Button Group',
    description: 'ButtonGroup',
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
    description: 'Embed PDF file',
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
    displayName: 'Steps',
    description: 'Steps',
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
    displayName: 'Kanban Board',
    description: 'Kanban Board',
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
    name: 'ColorPicker',
    displayName: 'Color Picker',
    description: 'Color Picker Palette',
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
        displayName: 'Set Color',
        handle: 'setColor',
        params: [{ handle: 'color', displayName: 'color', defaultValue: '#ffffff', type: 'color' }],
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
    displayName: 'Tree Select',
    description: 'Select values from a tree view',
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
        label: { value: 'Countries' },
        data: {
          value:
            '{{[{"label":"Asia","value":"asia","children":[{"label":"China","value":"china","children":[{"label":"Beijing","value":"beijing"},{"label":"Shanghai","value":"shanghai"}]},{"label":"Japan","value":"japan"},{"label":"India","value":"india","children":[{"label":"Delhi","value":"delhi"},{"label":"Mumbai","value":"mumbai"},{"label":"Bengaluru","value":"bengaluru"}]}]},{"label":"Europe","value":"europe","children":[{"label":"France","value":"france"},{"label":"Spain","value":"spain"},{"label":"England","value":"england"}]},{"label":"Africa","value":"africa"}]}}',
        },
        checkedData: { value: '{{["asia"]}}' },
        expandedData: { value: '{{["asia"]}}' },
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
    displayName: 'Link',
    description: 'Add link to the text',
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
        displayName: 'Link Target',
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
          { name: 'New Tab', value: 'new' },
          { name: 'Same Tab', value: 'same' },
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
          { name: 'Never', value: 'no-underline' },
          { name: 'On Hover', value: 'on-hover' },
          { name: 'Always', value: 'underline' },
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
        displayName: 'Click',
      },
    ],
    definition: {
      others: {
        showOnDesktop: { value: '{{true}}' },
        showOnMobile: { value: '{{false}}' },
      },
      properties: {
        linkTarget: { value: 'https://dev.to/' },
        linkText: { value: 'Click here' },
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
    displayName: 'Icon',
    description: 'Icon',
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
        displayName: 'Click',
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
    displayName: 'Form',
    description: 'Wrapper for multiple components',
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
          text: 'User Details',
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
          text: 'Name',
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
          text: 'Age',
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
          placeholder: 'Enter your name',
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
          text: 'Submit',
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
        displayName: 'Button To Submit Form',
        options: [{ name: 'None', value: 'none' }],
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
      onSubmit: { displayName: 'On submit' },
      onInvalid: { displayName: 'On invalid' },
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
        displayName: 'Submit Form',
      },
      {
        handle: 'resetForm',
        displayName: 'Reset Form',
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
    displayName: 'Bounded Box',
    description: 'An infinitely customizable image annotation widget',
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
        displayName: 'Image Url',
        validation: {
          schema: { type: 'string' },
        },
      },
      selector: {
        type: 'select',
        displayName: 'Selector',
        options: [
          { name: 'Recatangle', value: 'RECTANGLE' },
          { name: 'Point', value: 'POINT' },
        ],
        validation: {
          schema: { type: 'string' },
        },
      },
      labels: {
        type: 'code',
        displayName: 'List of labels',
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
        labels: { value: `{{['Tree', 'Car', 'Stree light']}}` },
      },
      events: [],
      styles: {
        visibility: { value: '{{true}}' },

        disabledState: { value: '{{false}}' },
      },
    },
  },
];
