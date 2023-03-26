import React, { useState, useEffect } from 'react';
import EnterIcon from '../../assets/images/onboardingassets/Icons/Enter';
import { ButtonSolid } from '@/_components/AppButton';
import OnbboardingFromSH from '../OnBoardingForm/OnbboardingFromSH';
import LogoLightMode from '@assets/images/Logomark.svg';
import LogoDarkMode from '@assets/images/Logomark-dark-mode.svg';

function SetupScreenSelfHost({ darkMode }) {
  const [showSelfHostOboarding, setShowSelfHostOboarding] = useState(false);
  const Logo = darkMode ? LogoDarkMode : LogoLightMode;

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        setShowSelfHostOboarding(true);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className="sh-setup-screen-wrapper">
      {!showSelfHostOboarding ? (
        <div className="sh-setup-banner">
          <div className="onboarding-navbar onboarding-navbar-layout setup-page-navbar">
            <div className="tooljet-nav-logo">
              <Logo height="23" width="92" alt="tooljet logo" data-cy="page-logo" />
            </div>
          </div>
          {/* placeholders for image */}
          <div className="sh-setup-banner-inner" data-cy="setup-banner-inner"></div>
          <div className="sh-setup-sub-banner" data-cy="setup-sub-banner"></div>
          <div className="sh-setup-card" data-cy="setup-card">
            <img
              src="assets/images/onboardingassets/Illustrations/Dots.svg"
              alt="tooljet onboarding"
              loading="lazy"
              data-cy="setup-card-image"
            />
            <h1 data-cy="setup-card-header">
              Hi好,
              <br /> 欢迎来到 <br />
              <span>ToolJet!</span>
            </h1>
            <p data-cy="setup-card-sub-header">让我们设置您的工作区</p>
            <ButtonSolid
              className="sh-setup-button"
              onClick={() => setShowSelfHostOboarding(true)}
              data-cy="setup-tooljet-button"
            >
              <span>设置 ToolJet</span>
              <EnterIcon className="enter-icon-onboard" fill={'#fff'} />
            </ButtonSolid>
          </div>
        </div>
      ) : (
        <OnbboardingFromSH darkMode={darkMode} />
      )}
    </div>
  );
}

export default SetupScreenSelfHost;
