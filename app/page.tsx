// import ProductCard from "./components/ProductCard";
import Image from "next/image";
// import coffee from "@/public/images/coffee.jpg";

export default async function Home() {

  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="React Cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
