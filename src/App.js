import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Body from './components/Body';

const Data = {
  title: "Weather App",
  city: "New York",
  text: "Ayo look at this sick new paragraph I'm writing. Since I have time I figure I'll write my own paragraph and see what happens. I've never been a writer, I don't think I could ever become a writer honestly. I don't think I have the patience or the vocabulary to fill out an entire book, let alone have something interesting enough to write to keep a reader's attention. I wonder if anyone will read this paragraph right here. Honestly, after typing this out I'm kind of enjoying the paragraph-writing process. Hm. Maybe I could be a writer. Maybe, as long as I have nothing to really say, I could keep writing forever and ever and ever until I write one paragraph so large, it would fill an entire book. Wow, one book with only one paragraph, that would be something. I would title the book..."Para-grammar". So sick.",
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading />
        <Body />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
