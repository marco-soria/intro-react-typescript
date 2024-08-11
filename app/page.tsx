'use client';
import { useState } from "react";
import type { MouseEventHandler } from "react";

// Ejemplo utilizando una librería sin tipos.
// Realmente no hace falta su uso.
import { random } from "lodash";
import { LazyImage } from "@/components/RandomFox";


// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// random number from 1 to 122
const myRandom = () => random(1, 122);

// type ImageItem = {
//   id: string;
//   url: string;
// };

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${myRandom()}.jpg`;
    setImages([...images, { id, url }]);
  };

  return (
    <div>
      <main>
      <div className="m-4">
          <button
            onClick={addNewFox}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add new fox
          </button>
        </div>
        {images.map(({ id, url }, index) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
