import './App.scss';
import Corousel from './Corousel';
import YouTubeIFrame from './YouTubeIFrame';

function App() {
  return (
    <div className="App">
      {/*Here I have divided the App Component into two child Components. The Corousel is
      taking the entire ViewPort space and the Iframe is fixed at bottom right corner. */}
      <Corousel></Corousel>
      <YouTubeIFrame></YouTubeIFrame>
  </div>
  );
}

export default App;
