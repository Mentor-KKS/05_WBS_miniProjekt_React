import { useState } from "react";
import { toast } from "react-toastify";

const generateId = () => Date.now();

function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(1);

  const trimmedName = name.trim();
  const isDisabled = trimmedName === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      id: generateId(),
      name: trimmedName,
      goal: Number(goal),
      count: 0,
    };

    onAdd(newHabit);
    setName("");
    setGoal(1);
    toast.success("Habit added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Add New Habit
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Add a new habit..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-300"
        />
        <input
          type="number"
          min="1"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-28 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-teal-300"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`px-6 py-2 rounded transition ${
            isDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-teal-500 text-white hover:bg-teal-600"
          }`}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
