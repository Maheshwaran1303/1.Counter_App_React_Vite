import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  // Decrement function
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-2xl shadow-lg text-center text-gray-800"
      >
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>

        <motion.p
          key={count}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={`text-5xl font-extrabold my-4 ${
            count === 10 ? "text-red-500" : "text-blue-600"
          }`}
        >
          {count}
        </motion.p>

        <div className="flex gap-4 mt-6">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition"
            disabled={count === 0}
          >
            <Minus size={20} />
            Decrease
          </button>

          <button
            onClick={reset}
            className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-600 transition"
          >
            <RotateCcw size={20} />
            Reset
          </button>

          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
            disabled={count === 10}
          >
            <Plus size={20} />
            Increase
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Counter;
