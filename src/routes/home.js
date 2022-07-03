import { descriptors } from "../data";
import { useState } from "react";

export default function Home() {
  const [descriptor, setDescriptor] = useState("software developer");
  const [index, setIndex] = useState(1);

  function handleDescriptor() {
    let incrementedIndex = (index + 1) % descriptors.length;
    setIndex(incrementedIndex);
    let nextDescriptor = descriptors[index];
    setDescriptor(nextDescriptor);
  }

  return (
    <main>
      <h1 className="home-title">
        My name is Madison and I am a{" "}
        <span className="descriptor" onClick={handleDescriptor}>
          {descriptor}.
        </span>
      </h1>
    </main>
  );
}
