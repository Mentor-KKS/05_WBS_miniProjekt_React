import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressActions from "./components/ProgressActions";
import PresetHabits from "./components/PresetHabits";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import ConfirmClearToast from "./components/ConfirmClearToast";

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    const total = habits.length;
    const completed = habits.filter((h) => h.count >= h.goal).length;

    if (total > 0 && completed === total) {
      toast("🎉 All habits completed!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
    toast.info("Habit deleted.", { position: "top-right" });
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
    if (habits.length === 0) return;

    toast(
      ({ closeToast }) => (
        <ConfirmClearToast
          onConfirm={() => {
            setHabits([]);
            toast.info("All habits cleared.", { position: "top-right" });
            closeToast();
          }}
          onCancel={closeToast}
        />
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
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
      <ToastContainer position="top-center" autoClose={2000} theme="light" />
    </div>
  );
}

export default App;
