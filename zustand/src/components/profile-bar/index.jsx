"use client";
import { useStore } from "@/stores";

export function ProfileBar() {
  const { user, products } = useStore();

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  );
}
