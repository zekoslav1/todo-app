import { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-gray-800 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-800"
      />
      <button
        type="submit"
        className="rounded-xl bg-indigo-500 px-6 py-3.5 font-medium text-white shadow-sm transition-all hover:bg-indigo-600 hover:shadow-md active:scale-95 dark:bg-indigo-600 dark:hover:bg-indigo-500"
      >
        Add
      </button>
    </form>
  )
}
