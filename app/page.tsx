import ProductCard from "./components/ProductCard";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <div className="space-y-4">
        <ProductCard />
      </div>
    </main>
  );
}
