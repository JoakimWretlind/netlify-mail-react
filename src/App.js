
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
}

export default App;
