function ConfirmClearToast({ onConfirm, onCancel }) {
  return (
    <div className="space-y-2">
      <p className="font-bold">Are you sure you want to delete all habits?</p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onConfirm}
          className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200"
        >
          Yes
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmClearToast;
