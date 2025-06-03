import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressActions from "./components/ProgressActions";
import PresetHabits from "./components/PresetHabits";

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const updateHabit = (id, delta) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id ? { ...h, count: Math.max(0, h.count + delta) } : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const resetHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, count: 0 } : h))
    );
  };

  const resetAllHabits = () => {
    setHabits((prev) => prev.map((h) => ({ ...h, count: 0 })));
  };

  const clearAllHabits = () => {
    if (confirm("Are you sure you want to delete all habits?")) {
      setHabits([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <Header />
        <HabitForm onAdd={addHabit} />
        <PresetHabits onAdd={addHabit} />
        <HabitList
          habits={habits}
          onUpdate={updateHabit}
          onDelete={deleteHabit}
          onReset={resetHabit}
        />
        <ProgressActions
          habits={habits}
          onResetAll={resetAllHabits}
          onClearAll={clearAllHabits}
        />
      </div>
    </div>
  );
}

export default App;
