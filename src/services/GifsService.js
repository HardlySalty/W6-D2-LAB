import { logger } from "../utils/Logger"
import { giphyApi } from "./AxiosService"
import { Gif } from "../models/Gif"
import { AppState } from "../AppState"


class GifsService {

    async searchGifs(form) {
        const res = await giphyApi.get('/search', { params: form })
        const gifsArray = res.data.data
        AppState.gifs = gifsArray.map(e => new Gif(e))
    }

}

export const gifsService = new GifsService()