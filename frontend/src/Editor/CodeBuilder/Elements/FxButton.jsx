import React from 'react';

export default function FxButton({ active, onPress, dataCy }) {
  return (
    <div
      title="使用函数来设置值，而不是使用固定值"
      className={`fx-button ${active ? 'active' : ''} unselectable`}
      onClick={onPress}
      data-cy={`${dataCy}-fx-button`}
    >
      Fx
    </div>
  );
}
