'use client';
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";


// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// random number from 1 to 122
const random = () => Math.floor(Math.random() * 122) + 1;

type ImageItem = {
  id: string;
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <div>
      <main>
      {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <RandomFox image={url} />
          </div>
        ))}
      </main>
    </div>
  );
}
