import React, { useState, useEffect } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

export const QrCode = function QrCode({
  height,
  width,
  properties,
  styles,
  setExposedVariable,
  registerAction }) {

  const [value, setValue] = useState(properties.value);
  const { qrBackgroundColor, qrColor, qrType, level } = properties;
  const { visibility, disabledState, borderColor, borderRadius, padding } = styles;

  const widgetVisibility = visibility ?? true;

  useEffect(() => {
    setValue(properties.value);
    setExposedVariable('value', properties.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties.value]);

  registerAction(
    'setText',
    async function (text) {
      setValue(text);
      setExposedVariable('value', text);
    },
    [setValue]
  );

  return (
    <div
      style={{
        display: widgetVisibility ? 'flex' : 'none',
        justifyContent: 'center',
        padding: Number.parseInt(padding),
        border: `1px solid ${borderColor}`,
        borderRadius: borderRadius ? parseFloat(borderRadius) : 0,
      }}
      data-disabled={disabledState}
    >
      <div>
        {
          qrType == 'svg' ? (<QRCodeSVG
            value={value}
            size={height > width ? width - Number.parseInt(padding) * 2 : height - Number.parseInt(padding) * 2}
            bgColor={qrBackgroundColor}
            fgColor={qrColor}
            level={level}
          />) : (<QRCodeCanvas
            value={value}
            size={height > width ? width - Number.parseInt(padding) * 2 : height - Number.parseInt(padding) * 2}
            bgColor={qrBackgroundColor}
            fgColor={qrColor}
            level={level}
          />)
        }
      </div>
    </div>
  );
};
