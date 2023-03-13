import React from 'react';

export default function ErrorModal() {
  const [show, setShow] = React.useState(true);

  const close = () => {
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">二维码扫描器不工作</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={close}
              ></button>
            </div>
            <div className="modal-body">
              请确保您的设备上有摄像头请尝试关闭浏览器并再次打开, 如果它不工作，请联系支持人员.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal" onClick={close}>
                关闭
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
