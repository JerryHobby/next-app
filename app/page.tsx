import ProductCard from "./components/ProductCard";
import { useSession } from "next-auth/react";

export default function Home() {

  return (
    <main>
      <h1>Hello World</h1>
      <div className="space-y-4">
        <ProductCard />
      </div>
    </main>
  );
}
