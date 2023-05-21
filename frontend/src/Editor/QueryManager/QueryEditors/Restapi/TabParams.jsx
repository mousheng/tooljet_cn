import React from 'react';
import GroupHeader from './GroupHeader';
import TabContent from './TabContent';

export default ({
  options = [],
  currentState,
  theme,
  removeKeyValuePair,
  addNewKeyValuePair,
  onChange,
  componentName,
  handlePaste,
}) => {
  return (
    <>
      <GroupHeader paramType={'url_params'} descText={'请求参数'} handlePaste={handlePaste}/>
      <TabContent
        options={options}
        currentState={currentState}
        theme={theme}
        removeKeyValuePair={removeKeyValuePair}
        onChange={onChange}
        componentName={componentName}
        tabType={'params'}
        paramType={'url_params'}
        addNewKeyValuePair={addNewKeyValuePair}
      />
    </>
  );
};
