import React from 'react';
import EditIcon from '../Icons/edit.svg';
import { appService } from '@/_services';
import { toast } from 'react-hot-toast';

function EditAppName({ appId, appName, onNameChanged }) {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  const [name, setName] = React.useState(appName);

  React.useEffect(() => {
    setName(appName);
  }, [appName]);

  const saveAppName = async (name) => {
    if (!name.trim()) {
      toast("应用程序名称不能为空", {
        icon: '🚨',
      });
      return;
    }
    await appService
      .saveApp(appId, { name })
      .then(() => {
        onNameChanged(name);
      })
      .catch(() => {
        toast('编辑应用程序名称时出错', {
          icon: '🚨',
        });
      });
  };

  return (
    <div className={`app-name input-icon ${darkMode ? 'dark' : ''}`}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        onBlur={(e) => saveAppName(e.target.value)}
        className="form-control-plaintext form-control-plaintext-sm"
        value={name}
        data-cy="app-name-input"
      />
      <span className="input-icon-addon">
        <EditIcon />
      </span>
    </div>
  );
}

export default EditAppName;
