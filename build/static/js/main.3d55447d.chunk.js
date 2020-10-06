(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(13),a(1)),l=a(4),s=a.n(l);var p=function(){return r.a.createElement("header",{className:"header narrow"},r.a.createElement("img",{className:"logo logo_position_header",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}))},u=a(7),m=a(5),d=a(6),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this._baseUrl=a,this._headers=n}return Object(d.a)(e,[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"getCardList",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"editUserInfo",value:function(e){var t=this,a=e.newName,n=e.newOccupation;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:a,about:n})}).then((function(e){return t._response(e)}))}},{key:"addNewCard",value:function(e){var t=this,a=e.dataName,n=e.dataLink;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:a,link:n})}).then((function(e){return t._response(e)}))}},{key:"deleteCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._baseUrl,"/cards/").concat(a),{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"likeCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(a),{method:"PUT",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"dislikeCard",value:function(e){var t=this,a=e.cardId;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(a),{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"addUserAvatar",value:function(e){var t=this,a=e.avatarLink;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:a})}).then((function(e){return t._response(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"1fc0b639-a579-4abe-9981-a2f8e932c357","Content-Type":"application/json"}});var h=function(e){var t=e.card,a=e.clickHandler;return r.a.createElement("li",{className:"card"},r.a.createElement("button",{className:"button card__button-trash change-opacity",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),r.a.createElement("img",{className:"card__image",src:t.link,alt:"\u041d\u0430 \u0444\u043e\u0442\u043e: ".concat(t.title),onClick:function(){a(t)}}),r.a.createElement("div",{className:"card__content"},r.a.createElement("h2",{className:"card__heading"},t.title),r.a.createElement("div",{className:"card__like-container"},r.a.createElement("button",{className:"button card__like-button change-opacity",type:"button","aria-label":"\u041e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),r.a.createElement("p",{className:"card__like-counter"},"0"))))};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,c=e.onEditAvatar,o=e.onCardClick,l=Object(n.useState)(""),s=Object(i.a)(l,2),p=s[0],m=s[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),f=b[0],E=b[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),y=N[0],g=N[1],k=Object(n.useState)([]),O=Object(i.a)(k,2),j=O[0],C=O[1];return Object(n.useEffect)((function(){_.getUserData().then((function(e){m(e.name),E(e.about),g(e.avatar)}))}),[]),Object(n.useEffect)((function(){_.getCardList().then((function(e){var t=e.map((function(e){return{title:e.name,link:e.link,id:e._id}}));C(t)}))}),[]),r.a.createElement("main",{className:"main narrow"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__data"},r.a.createElement("div",{className:"profile__pic-container"},r.a.createElement("img",{className:"profile__pic",src:y||"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png",alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),r.a.createElement("div",{className:"profile__pic-overlay",onClick:c})),r.a.createElement("div",{className:"profile__container"},r.a.createElement("h1",{className:"profile__title"},p),r.a.createElement("button",{className:"button profile__edit-button change-opacity","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",onClick:t}),r.a.createElement("p",{className:"profile__subtitle"},f))),r.a.createElement("button",{className:"button profile__add-button change-opacity","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",type:"button",onClick:a})),r.a.createElement("section",{className:"photo-grid"},r.a.createElement("ul",{className:"photo-grid__list"},j.map((function(e){var t=e.id,a=Object(u.a)(e,["id"]);return r.a.createElement(h,{card:a,key:t,clickHandler:o})})))))};var f=function(){return r.a.createElement("footer",{className:"footer narrow"},r.a.createElement("p",{className:"footer__text"},"\xa9 2020 Mesto Russia"))};var E=function(e){var t=e.title,a=e.name,n=e.children,c=e.isOpen,o=e.onClosePopup;return r.a.createElement("div",{className:"popup popup_type_".concat(a," ")+(c?"popup_opened":"")},r.a.createElement("div",{className:"popup__container popup__container_type_modal"},r.a.createElement("h2",{className:"popup__heading"},t),r.a.createElement("form",{className:"popup__form",action:"#",name:a,method:"post"},n,r.a.createElement("button",{className:"button popup__button",type:"submit",name:"save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement("button",{className:"button popup__close-button change-opacity",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:o})))};var v=function(e){var t=e.card,a=e.name,n=e.isOpen,c=e.onClosePopup;return r.a.createElement("div",{className:"popup popup_type_".concat(a," ")+(n?"popup_opened":"")},r.a.createElement("div",{className:"popup__container popup__container_type_image"},r.a.createElement("img",{className:"popup__image",src:t.link,alt:t.title}),r.a.createElement("p",{className:"popup__capture"},t.title),r.a.createElement("button",{className:"button popup__close-button popup__close-button_type_image change-opacity",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:c})))},N=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"popup__input popup__input_type_name",id:"input-name",type:"text",name:"name",placeholder:"\u041a\u0442\u043e \u0432\u044b?",minLength:"2",maxLength:"40",required:!0,noValidate:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-name-error"}),r.a.createElement("input",{className:"popup__input popup__input_type_about",id:"input-about",type:"text",name:"occupation",placeholder:"\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?",minLength:"2",maxLength:"200",required:!0,noValidate:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-about-error"})),y=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"popup__input popup__input_type_place",id:"input-place",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,noValidate:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-place-error"}),r.a.createElement("input",{className:"popup__input popup__input_type_link",id:"input-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,noValidate:!0}),r.a.createElement("span",{className:"popup__input-error",id:"input-link-error"})),g=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"popup__input popup__input_type_edit-avatar",id:"avatar-link",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",minLength:"1",maxLength:"200",required:!0,noValidate:!0}),r.a.createElement("span",{className:"popup__input-error",id:"avatar-link-error"}));var k=function(){document.body.classList.add("root");var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),_=d[0],h=d[1],k=Object(n.useState)([]),O=Object(i.a)(k,2),j=O[0],C=O[1],U=Object(n.useState)(!1),L=Object(i.a)(U,2),P=L[0],S=L[1];function w(){S(!1),C([]),h(!1),c(!1),u(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement(p,null),r.a.createElement(b,{onEditProfile:function(){c(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){C(e),S(!0)}}),r.a.createElement(f,null),r.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",name:"edit-profile",children:N,isOpen:a,onClosePopup:w}),r.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",children:y,isOpen:s,onClosePopup:w}),r.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",children:g,isOpen:_,onClosePopup:w}),r.a.createElement(v,{card:j,name:"full-image",isOpen:P,onClosePopup:w})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a.p+"static/media/logo.2b1f7ee5.svg"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3d55447d.chunk.js.map