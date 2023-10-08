import { useState } from "react"

function App() {
  const [color, setColor] = useState("White")

  return (

    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className="min-h-screen flex items-center justify-center text-6xl font-semibold text-blue-500 italic ">Play BgColor</h1>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-200 px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}>Red</button>

          <button onClick={() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}>Green</button>

          <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}>Blue</button>

          <button onClick={() => setColor("Olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Olive" }}>Olive</button>

          <button onClick={() => setColor("Brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Brown" }}>Brown</button>

          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-lg text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>Reset</button>

          <button onClick={() => setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Yellow" }}>Yellow</button>

          <button onClick={() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Pink" }}>Pink</button>

          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}>Purple</button>

          <button onClick={() => setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}>Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
