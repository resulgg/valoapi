import * as model from "./model.js"
import view from "./views/view";
import agents from "./views/agents";
import weapons from "./views/weapon";
import map from "./views/map.js";


const controlAgent = async () => {
    await model.getAgents();
console.log(model.state.agent)

  agents.render(model.state.agent);
}

const controlWeapon = async () => {
    await model.getWeapons();
    weapons.render(model.state.weapons);
}

const controlMap = async () => {
    await model.getMap();
    map.render(model.state.maps)
}

const controlAgentDetails = async (id) => {
    await model.getAgentDetails(id)
    console.log(model.state.agentDetails)
    agents.renderDetail(model.state.agentDetails)
}

controlAgent();

const init = () => {
    agents.addEventHandler(controlAgent);
    weapons.addEventHandler(controlWeapon);
    map.addEventHandler(controlMap)
    agents.addDetailHandler(controlAgentDetails)
}
init();