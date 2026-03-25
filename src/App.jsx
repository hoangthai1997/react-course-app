import './App.css'

function Greeting({name, age}) {
  return <h1>Hello, I am {name}, i am {age} years old!</h1>
}

function App() {
  const showGreeting = false;
  return (
    <div>
      <Greeting name={"Thai"} age={29} />
    </div>
  )
}

export default App
