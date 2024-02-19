import Form from "./components/Form.jsx";
import Hero from "./components/hero";
import Navbar from "./components/Navbar.jsx";
// import RegisterPage from "./components/RegisterPage.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
