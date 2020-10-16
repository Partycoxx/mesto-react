import React from 'react'; 

function PopupWithForm({title, name, children, isOpen, onClosePopup, onSubmit}) {

    return (
    <div className={`popup popup_type_${name} ` + (isOpen ? 'popup_opened' : '')}>
    <div className="popup__container popup__container_type_modal">
        <h2 className="popup__heading">{title}</h2>
        <form className="popup__form" action="#" name={name} method="post" onSubmit={onSubmit} >
            {children}
            <button className="button popup__button" type="submit" name="save-button">
                Сохранить
            </button>
        </form>
        <button className="button popup__close-button change-opacity" type="button" aria-label="Закрыть окно" onClick={onClosePopup}></button>
    </div>
</div>
    )
}

export default PopupWithForm;