import axios from "axios"
import {
  TENSOURCE_HOME_PAGE_USERNAME,
  TENSOURCE_HOME_PAGE_PASSWORD
} from "react-native-dotenv"
const tenSourceHomePage = axios.create({
  baseURL: "https://tensource.com/login",
  auth: {
    username: TENSOURCE_HOME_PAGE_USERNAME,
    password: TENSOURCE_HOME_PAGE_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
