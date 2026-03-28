import { useState, useEffect } from "react";

export default function App() {
  // Mounting -> Updating -> Unmounting

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
      } catch (err) {

      }
    }
    fetchUsers()
  }, []);

  return (
    <div>
      
    </div>
  );
}