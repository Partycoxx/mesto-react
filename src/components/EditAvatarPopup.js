import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatarLink: inputRef.current.value,
    });
  }

  const addAvatarFormContent = (
    <>
      <input
        ref={inputRef}
        className="popup__input popup__input_type_edit-avatar"
        id="avatar-link"
        type="text"
        name="avatar"
        placeholder="Ссылка на изображение"
        minLength="1"
        maxLength="200"
      />
      <span className="popup__input-error" id="avatar-link-error"></span>
    </>
  );
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      children={addAvatarFormContent}
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    />
  );
}
