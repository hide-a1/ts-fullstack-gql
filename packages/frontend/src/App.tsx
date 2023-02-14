import React, { useState } from "react";
import { useGetTodosQuery } from "./__generated__/graphql";

function App() {
  const { data, loading, error } = useGetTodosQuery();

  return (
    <div className="App">
      <div>
        {data?.getTodos?.todos?.map((item) => (
          <p key={item?.id}>
            {item?.title} {item?.createdAt.toISOString()}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
