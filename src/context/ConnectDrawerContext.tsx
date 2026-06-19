"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface ConnectDrawerContextValue {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

const ConnectDrawerContext = createContext<ConnectDrawerContextValue | null>(
  null
);

interface ConnectDrawerProviderProps {
  children: ReactNode;
}

export function ConnectDrawerProvider({
  children,
}: ConnectDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleDrawer = useCallback(() => setIsOpen((prev) => !prev), []);

  const value = useMemo(
    () => ({ isOpen, openDrawer, closeDrawer, toggleDrawer }),
    [isOpen, openDrawer, closeDrawer, toggleDrawer]
  );

  return (
    <ConnectDrawerContext.Provider value={value}>
      {children}
    </ConnectDrawerContext.Provider>
  );
}

export function useConnectDrawer(): ConnectDrawerContextValue {
  const context = useContext(ConnectDrawerContext);
  if (!context) {
    throw new Error(
      "useConnectDrawer must be used within ConnectDrawerProvider"
    );
  }
  return context;
}
