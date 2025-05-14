import { Platform } from "react-native";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const androidUrl = Constants.expoConfig?.extra?.API_URL_ANDROID;
const iosUrl = Constants.expoConfig?.extra?.API_URL_IOS;
const webUrl = Constants.expoConfig?.extra?.API_URL_WEB;

let baseUrl = webUrl;
if (Platform.OS === "android") baseUrl = androidUrl;
else if (Platform.OS === "ios") baseUrl = iosUrl;

const Api: AxiosInstance = axios.create({ baseURL: baseUrl + "/api" });

Api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("token");
  if (token) config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});

Api.interceptors.response.use(
  async (res: AxiosResponse) => res.data,
  async (err: AxiosError) => Promise.reject(err)
);

export { Api };
