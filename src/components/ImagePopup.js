import React from 'react';

function ImagePopup({card, name, isOpen, onClosePopup}) {
    return (
        <div className={`popup popup_type_${name} ` + (isOpen ? 'popup_opened' : '')}>
            <div className="popup__container popup__container_type_image">
                <img className="popup__image" src={card.link} alt={card.title} />
                <p className="popup__capture">{card.title}</p>
                <button className="button popup__close-button popup__close-button_type_image change-opacity" type="button" aria-label="Закрыть окно" onClick={onClosePopup}></button>
            </div>
        </div>
    )
}

export default ImagePopup;