
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <div data-netlify-recaptcha="true">I am friendly</div>
      </form>
    </div>
  );
}

export default App;
