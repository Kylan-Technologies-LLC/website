import Image from "next/image";
import { NavBar } from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";


export default function Home() {
 return (
  <main className="relative mx-auto flex flex-col">
  <div>
    <NavBar></NavBar>
  </div>
  <div className="pt-30">
    <Hero></Hero>
  </div>
  </main>
 );
}
