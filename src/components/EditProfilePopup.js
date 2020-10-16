import React, {useState, useContext, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.description)
    }, [currentUser])

    function handleChange(e) {
        e.target.name === 'description' ? setDescription(e.target.value) : setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description
        })
    }

    /*↑ Мне нравится идея сделать одну универсальную функцию, но пока не знаю что делать в том случае, если инпутов будет больше двух*/

    const editProfileFormContent = (
        <>
        <input className="popup__input popup__input_type_name" id="input-name" type="text" name="name" value={name || ''} onChange={handleChange} placeholder="Кто вы?" minLength="2" maxLength="40" required noValidate />
        <span className="popup__input-error" id="input-name-error"></span>
        <input className="popup__input popup__input_type_about" id="input-about" type="text" name="description" value={description || ''} onChange={handleChange} placeholder="Чем вы занимаетесь?" minLength="2" maxLength="200" required noValidate />
        <span className="popup__input-error" id="input-about-error"></span>
    </>
    )


    return (
        <PopupWithForm
        title="Редактировать данные"
        name="edit-profile"
        children={editProfileFormContent}
        isOpen={isOpen}
        onClosePopup={onClose}
        onSubmit={handleSubmit}
      />
    )
}