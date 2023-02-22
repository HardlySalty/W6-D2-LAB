import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"


class GiftsService{

  async getGifts(){
    const gifts = await sandboxApi.get("/gifts")
    AppState.gifts = gifts.data.map(g => new Gift(g))
    
  }

  async createGift(form){
    const gift = new Gift(form)
    let newGift = await sandboxApi.post('/gifts', gift)
    newGift = new Gift(newGift.data)
    AppState.gifts.unshift(newGift)
  }

  async openGift(giftId){
    const gift = AppState.gifts.find(e => e.id == giftId)
    const giftIndex = AppState.gifts.findIndex(e => e.id == giftId)
    gift.opened = true
    let newGift = await sandboxApi.put(`/gifts/${giftId}`, gift)
    newGift = new Gift(newGift.data)
    logger.log(newGift)
    AppState.gifts.splice(giftIndex, 1, newGift)
  }

  async deleteGift(giftId){
    const giftIndex = AppState.gifts.findIndex(e => e.id == giftId)
    await sandboxApi.delete(`/gifts/${giftId}`)
    AppState.gifts.splice(giftIndex, 1)
  }

}

export const giftsService = new GiftsService()