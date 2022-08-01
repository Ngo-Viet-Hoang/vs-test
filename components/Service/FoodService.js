

import axios from 'axios';

const BASE_URL_SERVER = 'https://order-foods.herokuapp.com';

const API_ENDPOINT = {
  GET_FOOD_LIST: "/api/v1/foods/list",
  GET_DETAILS: "/api/v1/foods/",
  UPDATE_DETAILS: "/api/v1/foods/",
  CREATE_NEW: "/api/v1/foods/create",
  DELETE_FOOD: "/api/v1/foods/delete/",
  UPLOAD_LOGO: '/api/airlines/upload-logo'
}



class FoodService{

  getFoodList = async () => {
    return await axios.get(BASE_URL_SERVER + API_ENDPOINT.GET_FOOD_LIST);
  };

  getFoodDetails = async (id) => {
    return await axios.get(
      BASE_URL_SERVER + API_ENDPOINT.GET_DETAILS + id
    );
  };

  updateDetails = async (id, data) => {
    return await axios.put(
      BASE_URL_SERVER + API_ENDPOINT.UPDATE_DETAILS + id,
      data,
    );
  };

  createNew = async (data) => {
    return await axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_NEW, data, configs);
  };

  deleteFood = async (id) => {
    return await axios.delete(BASE_URL_SERVER + API_ENDPOINT.DELETE_FOOD + id, configs);
  }

  uploadLogo = async (data) => {
    return await axios.post(BASE_URL_SERVER + API_ENDPOINT.UPLOAD_LOGO, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

const foodService = new FoodService();
export default foodService;