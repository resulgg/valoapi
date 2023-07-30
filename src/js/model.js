import { fetchURL } from "./helpers";
import { AGENTS,MAP,WEAPONS } from "./config";

export const state = {
    agent: {},
    weapons: {},
    maps: {},
    agentDetails: {},
}

export const getAgents = async () => {
    try {
        const agents = await fetchURL(AGENTS);
        state.agent = agents.map(agent => {
            return {
                name : agent.displayName,
                image : agent.fullPortraitV2,
                id : agent.uuid,
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export const getWeapons = async () => {
    try {
        const weapons = await fetchURL(WEAPONS);
        state.weapons = weapons.map(weapon => {
            return {
                name: weapon.displayName,
                image: weapon.displayIcon,
                id: weapon.uuid,
            }
        })
    } catch (err) {
        
    }
}

export const getMap = async () => {
    try {
        const maps = await fetchURL(MAP);
        state.maps = maps.map(map => {
            return {
                name: map.displayName,
                image:map.splash,
                id: map.uuid,
            }
        })
    } catch (err) {
        
    }
}


export const getAgentDetails = async (id) =>  {
    const data = await fetchURL(`https://valorant-api.com/v1/agents/${id}?language=tr-TR&isPlayableCharacter=true`);
    state.agentDetails = {
        name: data.displayName,
        role: data.role.displayName,
        desc: data.description,
        image: data.fullPortraitV2
    }
 }