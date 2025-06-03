import HabitListItem from "./HabitListItem";

function HabitList({ habits, onUpdate, onDelete, onReset }) {
  if (habits.length === 0) {
    return (
      <p className="text-gray-500 text-center mb-6">
        No habits yet. Add one above.
      </p>
    );
  }

  return (
    <div className="space-y-4 mb-6">
      {habits.map((habit) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onReset={onReset}
        />
      ))}
    </div>
  );
}

export default HabitList;
