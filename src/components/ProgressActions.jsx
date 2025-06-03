function ProgressActions({ habits, onResetAll, onClearAll }) {
  if (habits.length === 0) return null;

  const completed = habits.filter((h) => h.count >= h.goal).length;
  const total = habits.length;

  return (
    <div className="mt-4 text-center space-y-2">
      <p className="text-xl text-gray-600">
        Progress: {completed} of {total} habits completed today
      </p>

      <div className="flex justify-center gap-4 mt-2 flex-wrap">
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
