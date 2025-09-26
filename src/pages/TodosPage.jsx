// export default function TodosPage() {
//   return (
//     <div>
//       <h1>Todos Pages </h1>
//     </div>
//   )
// }

import { useGetTodosQuery } from "../features/apiSlice";

export default function TodosPage() {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todos</h2>
      {todos.slice(0, 20).map((todo) => (
        <div key={todo.id}>
          {todo.title} - {todo.completed ? "Done" : "Not Done"}
        </div>
      ))}
    </div>
  );
}

