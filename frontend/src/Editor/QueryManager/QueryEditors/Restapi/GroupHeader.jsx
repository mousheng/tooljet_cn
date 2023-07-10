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
          {!bodyToggle && (
            <div class="d-flex justify-content-center" role="button" style={{ alignItems: 'center' }}>
              <span style={{ marginLeft: '20px' }}>批量添加</span> <textarea
                className='form-control'
                placeholder='可从浏览器直接粘贴'
                onChange={handleChange}
                value={inputText}
                style={{ height: '25px', width: '350px', margin: '0px 5px 0px 5px' }}
              ></textarea>
              <span class="rest-api-delete-field-option query-icon-wrapper d-flex" style={{ height: '25px', width: '25px' }} onClick={() => { handlePaste(paramType, inputText, setInputText) }}>
                <svg t="1688971389438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200"><path d="M958.3 193.7H256.2c-35.1 0-63.7 28.6-63.7 63.7v700.9c0 35.1 28.7 63.7 63.7 63.7h702.1c35.1 0 63.7-28.7 63.7-63.7V257.4c0.1-35.1-28.6-63.7-63.7-63.7z m-0.2 764.4H256.6V257.4H958v700.7zM256.2 767.4H65.6v-701h701.3v127.9h64.6v-128c0-35.1-28.7-64.3-63.7-64.3H65.7C30.6 2 2 31.4 2 66.3v700.9c0 35.1 28.7 63.7 63.7 63.7h190.6v-63.5h-0.1z m574.1-191.6H639.1V384.5h-64.2v191.3H384v63.8h191.2v191.2h63.9V639.6h191.2v-63.8z" p-id="4308"></path></svg>
              </span>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
