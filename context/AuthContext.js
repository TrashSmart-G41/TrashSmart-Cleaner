import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null); 

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/v1/auth/login`, {
        email,
        password,
      })
      .then(async (res) => {
        let userInfo = res.data;
        const token = userInfo.jwt;

        setUserInfo(userInfo);

        // Decode the JWT token
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);

        // Save data to AsyncStorage
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        await AsyncStorage.setItem("userToken", token);

        setUserToken(token);

        console.log("JWT Token:", token);
        console.log("Decoded Token:", decoded);
      })
      .catch((e) => {
        console.log(`Login error ${e}`);
      });

    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    setDecodedToken(null); 
    await AsyncStorage.removeItem("userInfo");
    await AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userToken) {
        setUserToken(userToken);
        setUserInfo(userInfo);

        const decoded = jwtDecode(userToken);
        setDecodedToken(decoded);
        console.log("Decoded Token (On App Launch):", decoded);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        decodedToken, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
