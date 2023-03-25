import Link from "next/link";
import { Basket } from "../basket";
import { ProfileBar } from "../profile-bar";

export function Header() {
  return (
    <header>
      <Link href="/">Logo</Link>
      <ProfileBar />
      <Basket />
    </header>
  );
}
