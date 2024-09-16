"use client"
import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  eventName: string;
  desc: string;
  isFeatured:boolean;
  eventImages: string[];
  language: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  nation: string;
  pincode: string;
  time:string,
  date:string
  category: string;
};

// This will allow you to update the state within the context whenever you need to.
export interface UserContextProps {
  user: User | null;
  updateUserData: (user: Partial<User>) => void;
}
//  const NewUserFormContext = React.createContext<UserContextProps | null>(null)
export const NewUserFormContext = createContext<UserContextProps | null>(null);
interface UserFormContextProviderProps {
  children: ReactNode;
}

export const useNewUserFormContext = () => {
  const context = useContext(NewUserFormContext);
  if (!context) {
    throw new Error(
      "useNewUserFormContext must be used within a UserFormContextProvider"
    );
  }

  return context;
};

export function UserFormContextProvider({
  children,
}: UserFormContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const updateUserData = (values: Partial<User>) => {
    setUser((prevUser: any) => ({ ...prevUser, ...values }));
  };

  return (
    <NewUserFormContext.Provider value={{ user, updateUserData }}>
    {children}
    </NewUserFormContext.Provider>
  );
}
