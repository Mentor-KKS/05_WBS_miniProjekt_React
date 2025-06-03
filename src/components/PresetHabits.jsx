const presetHabits = [
  { name: "Drink water", goal: 8 },
  { name: "Exercise", goal: 3 },
  { name: "Read", goal: 1 },
  { name: "Meditate", goal: 4 },
];

function PresetHabits({ onAdd }) {
  return (
    <div className="mt-6 mb-6">
      <h2 className="text-md font-semibold mb-2 text-gray-700">Quick Add</h2>
      <div className="flex flex-wrap gap-2">
        {presetHabits.map((habit) => (
          <button
            key={habit.name}
            onClick={() =>
              onAdd({
                id: Date.now(),
                name: habit.name,
                goal: habit.goal,
                count: 0,
              })
            }
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 text-sm"
          >
            {habit.name} +{habit.goal}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PresetHabits;
