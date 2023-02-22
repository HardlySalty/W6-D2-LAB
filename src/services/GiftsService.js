import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"


class GiftsService{

  async getGifts(){
    const gifts = await sandboxApi.get("/gifts")
    logger.log(gifts)
    AppState.gifts = gifts.data.map(g => new Gift(g))
    
  }

  async createGift(form){
    const gift = new Gift(form)
    logger.log(gift)
    let newGift = await sandboxApi.post('/gifts', gift)
    newGift = new Gift(newGift)
    AppState.gifts.push(newGift)
  }

}

export const giftsService = new GiftsService()