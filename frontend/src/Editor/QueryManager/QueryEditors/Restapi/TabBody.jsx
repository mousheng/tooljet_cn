import React from 'react';
import GroupHeader from './GroupHeader';
import TabContent from './TabContent';

export default ({
  options = [],
  jsonBody,
  theme,
  removeKeyValuePair,
  addNewKeyValuePair,
  onChange,
  onJsonBodyChange,
  componentName,
  bodyToggle,
  setBodyToggle,
  handlePaste,
}) => {
  return (
    <>
      <GroupHeader paramType={'body'} descText={'JSON原数据'} bodyToggle={bodyToggle} setBodyToggle={setBodyToggle} handlePaste={handlePaste}/>
      <TabContent
        options={options}
        theme={theme}
        removeKeyValuePair={removeKeyValuePair}
        onChange={onChange}
        onJsonBodyChange={onJsonBodyChange}
        componentName={componentName}
        tabType={'body'}
        jsonBody={jsonBody}
        paramType={'body'}
        bodyToggle={bodyToggle}
        addNewKeyValuePair={addNewKeyValuePair}
      />
    </>
  );
};
