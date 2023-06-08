import React, { useState } from 'react';
import { CustomToggleSwitch } from '@/Editor/QueryManager/Components/CustomToggleSwitch';

const GroupHeader = ({ paramType, descText, handlePaste, setBodyToggle, bodyToggle }) => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [inputText, setInputText] = useState('')
  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div className="border-bottom query-manager-restapi-border-color d-flex justify-content-between align-items-center">
      <div className="content-title d-flex justify-content-beyween align-items-center">
        <p
          className="my-0 py-3 px-3 font-weight-400"
          style={{ marginRight: '10px', color: darkMode ? '#ECEDEE' : '#11181C' }}
        >
          {' '}
          {descText}{' '}
        </p>
        <div className="d-flex align-items-center">
          {paramType == 'body' && (
            <div className=" my-0">
              <CustomToggleSwitch
                isChecked={bodyToggle}
                toggleSwitchFunction={setBodyToggle}
                action="bodyToggle"
                darkMode={darkMode}
              />
            </div>
          )}
          {!bodyToggle && (<div class="d-flex justify-content-center" role="button" style={{ alignItems: 'center' }}>
            <textarea className='form-control' placeholder='从浏览器批量粘贴参数' onChange={handleChange} value={inputText} style={{ height: '25px', width: '400px', margin: '0px 5px 0px 25px' }}></textarea>
            <span class="rest-api-delete-field-option query-icon-wrapper d-flex" style={{ height: '25px', width: '25px' }} onClick={() => { handlePaste(paramType, inputText) }}>
              <svg t="1684665697711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5944" width="200" height="200"><path d="M696.832 771.072h74.24v74.24h-74.24v-74.24z m-151.04 0h76.8v74.24h-76.8v-74.24z m-144.896 0h71.168v74.24h-71.168v-74.24z m-147.968 0h74.24v74.24h-74.24v-74.24z m-221.696-591.872v739.84H993.28V179.2h-370.176v74.24h295.936v591.872H844.8v-147.968h-665.6v147.968h-74.24V252.928h295.936v-74.24h-369.664z m443.904-74.24v332.8h-111.104l147.968 147.968 147.968-147.968h-111.104v-332.8h-73.728z" p-id="5945"></path></svg>
            </span>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
