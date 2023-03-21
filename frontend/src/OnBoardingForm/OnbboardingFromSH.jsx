import React, { useState, useEffect } from 'react';
import { authenticationService } from '@/_services';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OnBoardingInput from './OnBoardingInput';
import OnBoardingRadioInput from './OnBoardingRadioInput';
import AdminSetup from './AdminSetup';
import OnboardingBubblesSH from './OnboardingBubblesSH';
import ContinueButtonSelfHost from './ContinueButtonSelfHost';
import { getuserName } from '@/_helpers/utils';
import { ON_BOARDING_SIZE, ON_BOARDING_ROLES } from '@/_helpers/constants';
import LogoLightMode from '@assets/images/Logomark.svg';
import LogoDarkMode from '@assets/images/Logomark-dark-mode.svg';

function OnbboardingFromSH({ darkMode }) {
  const Logo = darkMode ? LogoDarkMode : LogoLightMode;
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    companySize: '',
    name: '',
    email: '',
    password: '',
    workspace: '',
  });

  const pageProps = {
    formData,
    setFormData,
    setPage,
    page,
    setCompleted,
    isLoading,
    darkMode,
  };

  useEffect(() => {
    if (completed) {
      authenticationService
        .setupAdmin({
          companyName: formData.companyName.trim(),
          companySize: formData.companySize,
          role: formData.role,
          password: formData.password,
          name: formData?.name,
          email: formData?.email,
          workspace: formData?.workspace,
        })
        .then((user) => {
          authenticationService.updateUser(user);
          authenticationService.deleteLoginOrganizationId();
          setIsLoading(false);
          navigate('/');
        })
        .catch((res) => {
          setIsLoading(false);
          setCompleted(false);
          toast.error(res.error || 'Something went wrong', {
            id: 'toast-login-auth-error',
            position: 'top-center',
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed]);

  const FORM_TITLES = [
    `设置管理员帐户`,
    `设置工作区`,
    `${formData?.name}，你在哪里工作 ?`,
    '您的角色?',
    '您公司的规模?',
    'What is the size of your company?', //dummy placeholder
  ];
  const FormSubTitles = ['这些信息将帮助我们改进Tool Jet。'];

  return (
    <div className="flex">
      <div className="onboarding-navbar onboarding-navbar-layout">
        <div className="tooljet-nav-logo">
          <Logo height="23" width="92" alt="tooljet logo" data-cy="page-logo" />
        </div>
        <div></div>
        <div className="onboarding-checkpoints">
          <p className={page == 0 ? `active-onboarding-tab` : ''} data-cy="set-up-admin-check-point">
            <img
              src={
                darkMode
                  ? 'assets/images/onboardingassets/Icons/Check_dark.svg'
                  : 'assets/images/onboardingassets/Icons/Check.svg'
              }
              loading="lazy"
              alt="check mark"
            ></img>
            设置管理员
          </p>
          <p
            className={page == 1 ? `active-onboarding-tab` : page < 1 ? 'passive-onboarding-tab' : ''}
            data-cy="set-up-workspace-check-point"
          >
            {page >= 1 && (
              <img
                src={
                  darkMode
                    ? 'assets/images/onboardingassets/Icons/Check_dark.svg'
                    : 'assets/images/onboardingassets/Icons/Check.svg'
                }
                loading="lazy"
                alt="check mark"
              ></img>
            )}
            设置工作区
          </p>
          <p className={page >= 2 ? `active-onboarding-tab` : `passive-onboarding-tab`}>公司简介</p>
          <div className="onboarding-divider"></div>
        </div>
        <div></div>
        {page > 0 && (
          <div className="onboarding-account-name" data-cy="user-account-name-avatar">
            {getuserName(formData)}
          </div>
        )}
      </div>
      <div className="page-wrap-onboarding">
        <div className="onboarding-form">
          <div className={page !== 0 ? 'onboarding-progress' : 'onboarding-progress-layout'}>
            <div className="navigation-wrap">
              {page > 1 && (
                <div
                  className="onboarding-back-button"
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  <img
                    src={
                      darkMode
                        ? 'assets/images/onboardingassets/Icons/Arrow_Back_dark.svg'
                        : 'assets/images/onboardingassets/Icons/Arrow_Back.svg'
                    }
                    loading="lazy"
                    alt="arrow back"
                    data-cy="back-arrow"
                  />
                  <p className="onboarding-back-text">返回</p>
                </div>
              )}
              <div className="onboarding-bubbles-container">{page > 1 && <OnboardingBubblesSH page={page} />}</div>
              {page > 1 && (
                <div
                  className="onboarding-back-button"
                  onClick={() => {
                    page != 4 && setPage((currPage) => currPage + 1);
                    if (page == 4) {
                      setIsLoading(true);
                      setCompleted(true);
                      return;
                    }
                  }}
                >
                  <p className="onboarding-skip-text">跳过</p>
                  <img
                    src={
                      darkMode
                        ? 'assets/images/onboardingassets/Icons/Arrow_forward_dark.svg'
                        : 'assets/images/onboardingassets/Icons/Arrow_forward.svg'
                    }
                    loading="lazy"
                    alt="arrow front"
                    data-cy="skip-button"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="form-container">
            <div className="onboarding-header-wrapper">
              <h1 className="onboarding-page-header" data-cy="onboarding-page-header">
                {FORM_TITLES[page]}
              </h1>
              <p className="onboarding-page-sub-header" data-cy="onboarding-page-sub-header">
                {FormSubTitles[0]}
              </p>
            </div>
            {page == 0 ? (
              <AdminSetup {...pageProps} />
            ) : page == 1 ? (
              <WorkspaceSetupPage {...pageProps} />
            ) : page == 2 ? (
              <Page0 {...pageProps} setIsLoading={setIsLoading} />
            ) : page == 3 ? (
              <Page1 {...pageProps} setIsLoading={setIsLoading} />
            ) : (
              <Page2 {...pageProps} setIsLoading={setIsLoading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// __PAGES__

export function Page0({ formData, setFormData, setPage, page, setCompleted, isLoading, darkMode }) {
  const props = { formData, setFormData, setPage, fieldType: 'companyName' };
  const btnProps = {
    setPage,
    page,
    formData,
    setCompleted,
    isLoading,
    darkMode,
  };
  return (
    <div className="onboarding-pages-wrapper">
      <OnBoardingInput {...props} placeholder="输入公司名称" autoFocus={true} />
      <ContinueButtonSelfHost {...btnProps} />
    </div>
  );
}

export function Page1({ formData, setFormData, setPage, page, setCompleted, isLoading, darkMode }) {
  const props = { formData, setFormData, fieldType: 'role' };
  const btnProps = { setPage, page, formData, setCompleted, isLoading, darkMode };

  return (
    <div className="onboarding-pages-wrapper">
      {ON_BOARDING_ROLES.map((field) => (
        <div key={field}>
          <OnBoardingRadioInput {...props} field={field} />
        </div>
      ))}
      <ContinueButtonSelfHost {...btnProps} />
    </div>
  );
}

export function Page2({ formData, setFormData, setPage, page, setCompleted, isLoading, setIsLoading, darkMode }) {
  const props = { formData, setFormData, fieldType: 'companySize' };
  const btnProps = {
    setPage,
    page,
    formData,
    setCompleted,
    isLoading,
    setIsLoading,
    darkMode,
  };
  return (
    <div className="onboarding-pages-wrapper">
      {ON_BOARDING_SIZE.map((field) => (
        <div key={field}>
          <OnBoardingRadioInput {...props} field={field} />
        </div>
      ))}
      <ContinueButtonSelfHost {...btnProps} />
    </div>
  );
}

export function WorkspaceSetupPage({
  formData,
  setFormData,
  setPage,
  page,
  setCompleted,
  isLoading,
  setIsLoading,
  darkMode,
}) {
  const props = { formData, setFormData, setPage, fieldType: 'workspace' };

  const btnProps = {
    setPage,
    page,
    formData,
    setCompleted,
    isLoading,
    setIsLoading,
    darkMode,
  };
  return (
    <div className="onboarding-pages-wrapper">
      <p className="onboarding-sh-labels">工作区名</p>
      <OnBoardingInput {...props} placeholder="输入工作区名称" autoFocus={true} />
      <ContinueButtonSelfHost {...btnProps} />
    </div>
  );
}

export default OnbboardingFromSH;
