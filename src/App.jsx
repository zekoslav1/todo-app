import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoFilter from './components/TodoFilter'

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 px-4 py-12 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto w-full max-w-xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Todos
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Stay organized, one task at a time.
          </p>
        </header>

        <div className="space-y-4">
          <TodoInput onAdd={addTodo} />

          {todos.length > 0 && (
            <TodoFilter current={filter} onChange={setFilter} counts={counts} />
          )}

          <ul className="space-y-2">
            {filtered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>

          {todos.length === 0 && (
            <p className="py-12 text-center text-gray-400 dark:text-gray-500">
              No todos yet. Add one above!
            </p>
          )}

          {todos.length > 0 && filtered.length === 0 && (
            <p className="py-8 text-center text-gray-400 dark:text-gray-500">
              No {filter} todos.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
