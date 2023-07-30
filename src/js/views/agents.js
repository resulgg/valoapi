import View from "./view.js";

class Agents extends View{
    _agentBtn = document.querySelector(".agents");
    _agentContainer = document.querySelector(".card-container");
    _agentDetailContainer = document.querySelector(".detail-wrapper");
    _bgCover = document.querySelector(".bg-cover");
    _closeBtn = document.querySelector(".close-btn");
    addEventHandler(handle){
        this._agentBtn.addEventListener("click",handle)
    }
    addDetailHandler(handle){
      this._agentContainer.addEventListener("click",(e) => {
         const id = e.target.closest(".card").dataset.id;
         this._agentDetailContainer.classList.toggle("hider");
         this._bgCover.classList.toggle("hider");
         handle(id);
         this._closeEventBtn()
      })
    }
    renderDetail(data){
      this._data = data;
      this._generateDetails();
    }
    _closeEventBtn(){
      this._agentDetailContainer.addEventListener("click", (e) => {
        if(e.target.classList.contains("close-btn")){
          this._agentDetailContainer.classList.add("hider");
          this._bgCover.classList.add("hider");
        }
      })
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
    _generateDetails(){
      const markupHTML =  `
      <div class="detail-card">
      <img class="card-image" src="${this._data.image}" alt="">
      <h1 class="agent-title">${this._data.name}</h1>
      <h3 class="agent-role">${this._data.role}</h3>
      <p class="agent-desc">${this._data.desc}</p>
      <i class="fa-solid fa-circle-xmark close-btn"></i>
    </div>
      `;
      this._agentDetailContainer.innerHTML = markupHTML;
    }
}

export default new Agents();