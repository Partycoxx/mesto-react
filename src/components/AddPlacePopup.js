import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddNewPlace }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleChange(e) {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddNewPlace({
      dataName: title,
      dataLink: link,
    });
  }

  const addPlaceFormContent = (
    <>
      <input
        className="popup__input popup__input_type_place"
        id="input-place"
        value={title || ""}
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Название"
        minLength="1"
        maxLength="30"
        required
        noValidate
      />
      <span className="popup__input-error" id="input-place-error"></span>
      <input
        className="popup__input popup__input_type_link"
        id="input-link"
        value={link || ""}
        onChange={handleChange}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        noValidate
      />
      <span className="popup__input-error" id="input-link-error"></span>
    </>
  );

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      children={addPlaceFormContent}
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    />
  );
}
