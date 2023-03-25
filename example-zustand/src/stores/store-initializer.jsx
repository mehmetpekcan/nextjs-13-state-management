"use client";
import { useRef } from "react";
import { useStore } from "./index";

export function StoreInitializer({ initialStore, children }) {
  const initializedBefore = useRef(false);

  if (!initializedBefore.current) {
    useStore.getState().hydrateStore(initialStore);
    initializedBefore.current = true;
  }

  return children;
}
