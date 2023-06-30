import React from 'react';
import { ButtonSolid } from '@/_components/AppButton';
import { useNavigate } from 'react-router-dom';

export const PasswordResetinfoScreen = function PasswordResetinfoScreen({ darkMode }) {
  const navigate = useNavigate();
  return (
    <div className="info-screen-wrapper">
      <div className="password-reset-card">
        <img
          className="info-screen-email-img"
          src={
            darkMode
              ? 'assets/images/onboardingassets/Illustrations/reset_password_successfull_dark.svg'
              : 'assets/images/onboardingassets/Illustrations/reset_password_successfull.svg'
          }
          alt="password lock"
          loading="lazy"
          data-cy="email-image"
        />
        <h1 className="common-auth-section-header" data-cy="reset-password-page-header">
          密码已重置
        </h1>
        <p className="info-screen-description" data-cy="reset-password-page-description">
          您的密码已成功重置，请登录ToolJet继续您的会话
        </p>
        <ButtonSolid
          variant="secondary"
          onClick={() => navigate('/login')}
          className="reset-password-info-btn"
          data-cy="back-to-login-button"
        >
          返回登录
        </ButtonSolid>
      </div>
    </div>
  );
};
