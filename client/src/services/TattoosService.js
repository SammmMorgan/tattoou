import { AppState } from "../AppState.js"
import { Tattoo } from "../models/Tattoo.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class TattoosService{
async getAllTattoos() {
    const response = await api.get('api/designs')
    logger.log('getting tattoos', response.data)  
    AppState.tattoos = response.data.map(tattoo => new Tattoo(tattoo)) 
    logger.log('mapped tattoos', AppState.tattoos)  
  }

}

export const tattoosService = new TattoosService()