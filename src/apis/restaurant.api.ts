import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'
import { RestaurantList, RestaurantListConfig } from 'src/types/restaurant.type'

const URL = 'restaurant'

const restaurantApi = {
  getRestaurants(params: RestaurantListConfig) {
    return http.get<SuccessResponse<RestaurantList>>(URL, {
      params
    })
  }
}

export default restaurantApi