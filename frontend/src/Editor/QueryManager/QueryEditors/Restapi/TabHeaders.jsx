import React from 'react';
import TabContent from './TabContent';
import GroupHeader from './GroupHeader';

export default ({ options = [], theme, removeKeyValuePair, addNewKeyValuePair, onChange, componentName }) => {
  return (
    <>
      <GroupHeader paramType={'headers'} descText="请求标头" handlePaste={handlePaste}/>
      <TabContent
        options={options}
        theme={theme}
        removeKeyValuePair={removeKeyValuePair}
        onChange={onChange}
        componentName={componentName}
        tabType={'headers'}
        paramType={'headers'}
        addNewKeyValuePair={addNewKeyValuePair}
      />
    </>
  );
};
