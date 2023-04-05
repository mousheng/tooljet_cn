import React from 'react';
import { ButtonSolid } from '@/_components/AppButton';
import { useNavigate } from 'react-router-dom';
export const ForgotPasswordInfoScreen = function ForgotPasswordInfoScreen({ email, darkMode }) {
  const navigate = useNavigate();
  return (
    <div className="info-screen-wrapper">
      <div className="forget-password-info-card">
        <img
          className="info-screen-email-img"
          src={
            darkMode
              ? 'assets/images/onboardingassets/Illustrations/reset_password mail_dark.svg'
              : 'assets/images/onboardingassets/Illustrations/reset_password_mail.svg'
          }
          alt="email image"
          loading="lazy"
          data-cy="email-image"
        />
        <h1 className="common-auth-section-header" data-cy="onboarding-page-header">
          验证您的邮件
        </h1>
        <p className="info-screen-description" data-cy="onboarding-page-description">
          我们已向 {email} 发送了一封带有密码重置链接的电子邮件。请单击该链接重置您的密码。
        </p>
        <p className="info-screen-spam-msg" data-cy="email-page-spam-msg">
          没有收到电子邮件？请检查垃圾邮件文件夹.
        </p>
        <div className="separator-onboarding">
          <div className="separator">
            <h2 data-cy="onboarding-separator">
              <span data-cy="onboarding-separator-text">OR</span>
            </h2>
          </div>
        </div>
        <ButtonSolid
          variant="secondary"
          className="forgot-password-info-btn"
          onClick={() => navigate('/login')}
          data-cy="back-to-login-button"
        >
          返回登录
        </ButtonSolid>
      </div>
    </div>
  );
};
