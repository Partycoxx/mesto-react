import React from 'react';


export const addPlaceFormContent = (
  <>
      <input className="popup__input popup__input_type_place" id="input-place" type="text" name="name" placeholder="Название" minLength="1" maxLength="30" required noValidate />
      <span className="popup__input-error" id="input-place-error"></span>
      <input className="popup__input popup__input_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required noValidate />
      <span className="popup__input-error" id="input-link-error"></span>
  </>
);

export const addAvatarFormContent = (
  <>
      <input className="popup__input popup__input_type_edit-avatar" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на изображение" minLength="1" maxLength="200" required noValidate />
      <span className="popup__input-error" id="avatar-link-error"></span>
  </>
);