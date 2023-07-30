import View from "./view.js";

class Map extends View{
    _mapBtn = document.querySelector(".maps");

    addEventHandler(handle){
        this._mapBtn.addEventListener("click",handle)
    }

    _generateMarkup(){
        this._data.forEach(agent => {
            const markupHTML =  `<div class="card" data-id="${agent.id}">
            <img class="agent-image"
              src="${agent.image}"
              alt="${agent.name}"
            />
            <h1 class="agent-name">${agent.name}</h1>
          </div>`;
          this._parentEl.insertAdjacentHTML("beforeend", markupHTML);
        })
    }
}

export default new Map();