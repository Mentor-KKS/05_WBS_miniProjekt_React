function ProgressActions({ habits, onResetAll, onClearAll }) {
  if (habits.length === 0) return null;

  const completed = habits.filter((h) => h.count >= h.goal).length;
  const total = habits.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full bg-white p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Today's Progress</p>
          <p className="text-2xl font-bold text-gray-600">
            {completed} / {total} habits complete
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-gray-600">{percent}%</p>
          <p className="text-xs text-gray-500">Complete</p>
        </div>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percent}%`,
            backgroundColor:
              percent === 100
                ? "#22c55e"
                : percent >= 66
                ? "#3b82f6"
                : percent >= 33
                ? "#facc15"
                : "#f87171",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <button
          onClick={onResetAll}
          className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded hover:bg-yellow-200"
        >
          Reset All
        </button>
        <button
          onClick={onClearAll}
          className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default ProgressActions;
