"use client"; 
import styles from "./page.module.css";
import { createContext, useState } from "react";

export const AuthProvider = createContext(null);

export default function Home() {

  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthProvider.Provider value={{isAuthorized,setIsAuthorized}} >
      <div className={styles.page}>
        login screens will be come..

      </div>
    </AuthProvider.Provider>
  );
}
