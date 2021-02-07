import React from 'react';
import { ReactComponent as SuccessIcon } from '../images/icons/iconSuccess.svg';
import { ReactComponent as FailIcon } from '../images/icons/iconFail.svg';

export default function InfoTooltip({ isOpen, onClose, currentUserData }) {
  const isUserRegistered = currentUserData.length > 0;

  const infoTooltipContent = (
    <>
      {isUserRegistered ? (
        <div className="info-tooltip">
          <SuccessIcon className="info-tooltip__image" />
          <p className="info-tooltip__text">Вы успешно зарегистрировались!</p>
        </div>
      ) : (
        <div className="info-tooltip">
          <FailIcon className="info-tooltip__image" />
          <p className="info-tooltip__text">Что-то пошло не так! Попробуйте ещё раз.</p>
        </div>
      )}
    </>
  );

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_modal">
        {infoTooltipContent}
        <button
          className="button popup__close-button popup__close-button_type_image change-opacity"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
