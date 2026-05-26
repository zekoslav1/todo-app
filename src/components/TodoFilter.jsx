const FILTERS = ['all', 'active', 'completed']

export default function TodoFilter({ current, onChange, counts }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {counts.active} item{counts.active !== 1 ? 's' : ''} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition-all ${
              current === f
                ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}
