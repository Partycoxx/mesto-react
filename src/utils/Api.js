class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _response(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._response(res));
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._response(res));
  }

  editUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._response(res));
  }

  addNewCard({ dataName, dataLink }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: dataName,
        link: dataLink,
      }),
    }).then((res) => this._response(res));
  }

  deleteCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._response(res));
  }

  changeLike(card, isLiked) {
    return isLiked ? this._dislikeCard(card) : this._likeCard(card);
  }

  _likeCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._response(res));
  }

  _dislikeCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._response(res));
  }

  addUserAvatar({ avatarLink }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    }).then((res) => this._response(res));
  }
}

const request = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-15",
  headers: {
    authorization: "1fc0b639-a579-4abe-9981-a2f8e932c357",
    "Content-Type": "application/json",
  },
});

export default request;
