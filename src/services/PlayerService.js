import axios from "axios";

const PLAYERS_REST_API_API_URL = 'http://localhost:8080/api/v1/players/';

class PlayerService{

    getPlayers(){
        return axios.get(PLAYERS_REST_API_API_URL);
    }

    createPlayer(player){
        return axios.post(PLAYERS_REST_API_API_URL, player);
    }

    getPlayerById(playerId){
        return axios.get(PLAYERS_REST_API_API_URL + playerId);
    }

    updatePlayer(playerId, player){
        return axios.put(PLAYERS_REST_API_API_URL+'/'+ player, playerId);
    }

    deletePlayer(playerId){
        return axios.delete(PLAYERS_REST_API_API_URL+  playerId);
    }
}

export default new PlayerService();