import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Input from '@/_ui/Input';
import Radio from '@/_ui/Radio';
import Button from '@/_ui/Button';

const Zendesk = ({ optionchanged, createDataSource, options, isSaving, selectedDataSource }) => {
  const [authStatus, setAuthStatus] = useState(null);

  function authZendesk() {
    const provider = 'zendesk';
    setAuthStatus('waiting_for_url');

    const scope = options?.access_type?.value === 'read' ? 'read' : 'read%20write';

    try {
      const authUrl = `https://${options?.subdomain?.value}.zendesk.com/oauth/authorizations/new?response_type=code&client_id=${options?.client_id?.value}&redirect_uri=${window.location.origin}/oauth2/authorize&scope=${scope}`;
      localStorage.setItem('sourceWaitingForOAuth', 'newSource');
      optionchanged('provider', provider).then(() => {
        optionchanged('oauth2', true);
      });
      setAuthStatus('waiting_for_token');
      window.open(authUrl);
    } catch (error) {
      toast.error(error);
      setAuthStatus(null);
    }
  }

  function saveDataSource() {
    optionchanged('code', localStorage.getItem('OAuthCode')).then(() => {
      createDataSource();
    });
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12 mb-3 ">
          <label className="form-label text-muted mt-3">zendesk子域</label>
          <Input
            type="text"
            className="form-control"
            onChange={(e) => optionchanged('subdomain', e.target.value)}
            value={options?.subdomain?.value ?? ''}
            placeholder="e.g. tooljet"
          />
        </div>

        <div className="col-md-12">
          <label className="form-label text-muted mt-3">客户 ID</label>
          <Input
            type="text"
            className="form-control"
            onChange={(e) => optionchanged('client_id', e.target.value)}
            value={options?.client_id?.value}
            placeholder="e.g. tj-zendesk"
          />
        </div>
        <div className="col-md-12 mb-2">
          <label className="form-label text-muted mt-3">
            客户端加密
            <small className="text-green mx-2">
              <img className="mx-2 encrypted-icon" src="assets/images/icons/padlock.svg" width="12" height="12" />
              已加密
            </small>
          </label>
          <Input
            type="password"
            className="form-control"
            onChange={(e) => optionchanged('client_secret', e.target.value)}
            value={options?.client_secret?.value}
          />
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <div className="form-label">权限</div>
            <p>
              如果您希望tool jet应用程序修改zendesk资源，请确保选择读写访问
            </p>
            <div>
              <Radio
                checked={options?.access_type?.value === 'read'}
                disabled={authStatus === 'waiting_for_token'}
                onClick={() => optionchanged('access_type', 'read')}
                text="只读"
                helpText="您的tooljet应用程序只能从资源中读取数据"
              />
              <Radio
                checked={options?.access_type?.value === 'write'}
                disabled={authStatus === 'waiting_for_token'}
                onClick={() => optionchanged('access_type', 'write')}
                text="读写"
                helpText="您的tooljet应用程序可以从资源中读取数据、修改资源等."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <center>
          {authStatus === 'waiting_for_token' && (
            <div>
              <Button
                className={`m2 ${isSaving ? ' loading' : ''}`}
                disabled={isSaving}
                onClick={() => saveDataSource()}
              >
                {isSaving ? '保存中...' : '保存数据源'}
              </Button>
            </div>
          )}

          {(!authStatus || authStatus === 'waiting_for_url') && (
            <Button
              className={`m2 ${authStatus === 'waiting_for_url' ? ' btn-loading' : ''}`}
              disabled={isSaving}
              onClick={() => authZendesk()}
            >
              {selectedDataSource?.id ? '重连' : '连接'} 至zendesk
            </Button>
          )}
        </center>
      </div>
    </div>
  );
};

export default Zendesk;
