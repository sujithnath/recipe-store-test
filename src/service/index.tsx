import axios from 'axios';
import { API_BASE_URL, SPACE, TOKEN } from '../utils/constants';

export const fetchRecipes = async () => {
  const URL = `${API_BASE_URL}/spaces/${SPACE}/environments/master/entries?access_token=${TOKEN}&content_type=recipe&limit=10&includes.Asset&includes.tags`
  try {
    return await axios.get(URL);
  } catch (error) {
    return error;
  }
};
