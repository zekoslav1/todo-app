export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3.5 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
          todo.completed
            ? 'border-indigo-500 bg-indigo-500 text-white'
            : 'border-gray-300 hover:border-indigo-400 dark:border-gray-600 dark:hover:border-indigo-500'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-left transition-all ${
          todo.completed
            ? 'text-gray-400 line-through dark:text-gray-500'
            : 'text-gray-800 dark:text-gray-100'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 rounded-lg p-1.5 text-gray-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover:opacity-100 dark:hover:bg-red-900/30 dark:hover:text-red-400"
        aria-label="Delete todo"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}
