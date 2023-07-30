export default class View {
    _parentEl = document.querySelector(".card-container")
    _data;

    render(data){
        if(!data) return
        this._data = data;
        this._clear();
        this._generateMarkup();
    }
    _clear(){
        this._parentEl.innerHTML = "";
    }
}
