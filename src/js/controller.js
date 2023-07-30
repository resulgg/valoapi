import * as model from "./model.js"
import view from "./views/view";
import agents from "./views/agents";
import weapons from "./views/weapon";
import map from "./views/map.js";


model.getAgentDetails("e370fa57-4757-3604-3648-499e1f642d3f");

const controlAgent = async () => {
    await model.getAgents();
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