import React from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  const [click, setClick] = React.useState(0);
  return (
    <ProtectedRoute>
      <div>Essa aqui vai ser a Home</div>
      <div>{click}</div>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        Clique Aqui
      </button>
    </ProtectedRoute>
  );
}
