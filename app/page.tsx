import { RandomFox } from "@/components/RandomFox";

const random = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  return (
    <div>
      <main>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />;
      </main>
    </div>
  );
}
