import { SlTrash, SlRefresh } from "react-icons/sl";

function HabitListItem({ habit, onUpdate, onDelete, onReset }) {
  const isComplete = habit.count >= habit.goal;
  const isAtZero = habit.count === 0;

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg px-4 py-3 ${
        isComplete
          ? "bg-green-100 border-green-400"
          : "bg-white border-gray-300"
      }`}
    >
      <div className="mb-2 sm:mb-0">
        <h3 className="text-lg font-medium">{habit.name}</h3>
        <p className="text-sm text-gray-600">
          {habit.count} / {habit.goal}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onUpdate(habit.id, -1)}
          disabled={isAtZero}
          className={`px-3 py-1 rounded-full transition ${
            isAtZero
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-red-100 text-red-600 hover:bg-red-200"
          }`}
        >
          −
        </button>

        <button
          onClick={() => onUpdate(habit.id, 1)}
          disabled={isComplete}
          className={`px-3 py-1 rounded-full transition ${
            isComplete
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-100 text-green-600 hover:bg-green-200"
          }`}
        >
          +
        </button>

        <button
          onClick={() => onReset(habit.id)}
          className="bg-yellow-100 text-yellow-700 px-2 py-2 rounded-full hover:bg-yellow-200"
        >
          <SlRefresh />
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="bg-gray-300 text-white px-2 py-2 rounded-full hover:bg-red-400"
        >
          <SlTrash />
        </button>
      </div>
    </div>
  );
}

export default HabitListItem;
