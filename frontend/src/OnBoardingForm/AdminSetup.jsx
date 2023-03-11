import React, { useState } from 'react';
import OnBoardingInput from './OnBoardingInput';
import OnboardingPassword from './OnboardingPassword';
import ContinueButtonSelfHost from './ContinueButtonSelfHost';

function AdminSetup({ formData, setFormData, setPage, page, setCompleted, isLoading, setIsLoading, darkMode }) {
  const props = { formData, setFormData, setPage };
  const btnProps = {
    setPage,
    page,
    formData,
    setCompleted,
    isLoading,
    setIsLoading,
    darkMode,
  };
  const passwordProps = { formData, setFormData };
  const [emailError, setEmailError] = useState(false);
  return (
    <div className="onboarding-pages-wrapper">
      <p className="onboarding-sh-labels" data-cy="name-input-label">
        姓名
      </p>
      <OnBoardingInput
        {...props}
        fieldType="name"
        placeholder="输入您的全名"
        autoFocus={true}
        dataCy="name-input-field"
      />
      <p className="onboarding-sh-labels" data-cy="email-input-label">
        邮箱
      </p>
      <OnBoardingInput
        placeholder="输入您的电子邮件"
        className="onboard-email-input"
        {...props}
        fieldType="email"
        emailError={emailError}
        setEmailError={setEmailError}
        dataCy="email-input-field"
      />
      <p className="onboard-password-label onboarding-sh-labels" data-cy="password-label">
        密码
      </p>
      <OnboardingPassword {...passwordProps} fieldType="password" data-cy="password-input-field" />
      <ContinueButtonSelfHost {...btnProps} setEmailError={setEmailError} />
      <p className="signup-terms" data-cy="signup-terms-helper">
      点击继续，视为同意
        <br />
        <span>
          <a href="https://www.tooljet.com/terms" data-cy="terms-of-service-link">
          服务条款{' '}
          </a>
          &
          <a href="https://www.tooljet.com/privacy" data-cy="privacy-policy-link">
            {' '}
            隐私政策
          </a>
        </span>
      </p>
    </div>
  );
}

export default AdminSetup;
