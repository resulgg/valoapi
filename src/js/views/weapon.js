import View from "./view";

class Weapon extends View{
    _weaponBtn = document.querySelector(".weapons");

    addEventHandler(handle){
        this._weaponBtn.addEventListener("click",handle)
    }

    _generateMarkup(){
        this._data.forEach(weapon => {
            const markupHTML =  `<div class="card" data-id="${weapon.id}">
            <img class="agent-image"
              src="${weapon.image}"
              alt="${weapon.name}"
            />
            <h1 class="agent-name">${weapon.name}</h1>
          </div>`;
          this._parentEl.insertAdjacentHTML("beforeend", markupHTML);
        })
    }
}

export default new Weapon();