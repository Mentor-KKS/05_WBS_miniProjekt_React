import { SlTrash, SlRefresh } from "react-icons/sl";

function HabitListItem({ habit, onUpdate, onDelete, onReset }) {
  const isComplete = habit.count >= habit.goal;
  const isAtZero = habit.count === 0;
  const progressPercent = Math.min((habit.count / habit.goal) * 100, 100);

  let statusLabel = "Not Started";
  let badgeColor = "bg-gray-600";
  if (progressPercent >= 100) {
    statusLabel = "Complete";
    badgeColor = "bg-green-600";
  } else if (progressPercent > 0) {
    statusLabel = "In Progress";
    badgeColor = "bg-blue-600";
  }

  let bgColor = "bg-gray-50";
  if (progressPercent >= 100) bgColor = "bg-green-50";
  else if (progressPercent >= 66) bgColor = "bg-blue-50";
  else if (progressPercent >= 33) bgColor = "bg-yellow-50";
  else if (progressPercent > 0) bgColor = "bg-red-50";

  return (
    <div
      className={`w-full ${bgColor} border border-gray-300 rounded-lg p-4 mr-2`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{habit.name}</h3>
            <span
              className={`text-white text-xs px-2 py-1 rounded-full ${badgeColor}`}
            >
              {statusLabel}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700">
            <span>
              Progress: {habit.count} / {habit.goal}
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressPercent}%`,
                backgroundColor:
                  progressPercent >= 100
                    ? "#22c55e"
                    : progressPercent >= 66
                    ? "#3b82f6"
                    : progressPercent >= 33
                    ? "#facc15"
                    : "#f87171",
              }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdate(habit.id, -1)}
            disabled={isAtZero}
            className={`text-lg px-4 py-2 rounded-md transition hover:scale-105 ${
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
            className={`text-lg px-4 py-2 rounded-md transition hover:scale-105 ${
              isComplete
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-100 text-green-600 hover:bg-green-200"
            }`}
          >
            +
          </button>

          <button
            onClick={() => onReset(habit.id)}
            className="text-lg px-3 py-2 rounded-md bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition"
          >
            <SlRefresh size={14} />
          </button>

          <button
            onClick={() => onDelete(habit.id)}
            className="text-lg px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-red-200 transition"
          >
            <SlTrash size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitListItem;
