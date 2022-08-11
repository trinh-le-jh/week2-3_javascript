import './App.css';
import Carousel from "./component/carousel/Carousel";

const App = () => {
  const listImageLink = [
    'https://i.pinimg.com/564x/35/48/11/3548115b047239ec44e48829458c53d3.jpg',
    'https://i.pinimg.com/564x/bc/e6/2e/bce62effb115ed32d3e6dceb0e7b2218.jpg',
    'https://i.pinimg.com/564x/33/c2/aa/33c2aa58a1b474486d581a9ce32900a9.jpg',
    'https://i.pinimg.com/564x/8b/83/bc/8b83bc5795f6a411883332cd9ddae427.jpg',
    'https://i.pinimg.com/564x/65/77/aa/6577aa9352169b91a1c70454a60347a6.jpg',
    'https://i.pinimg.com/564x/fd/92/44/fd92443cb8d92d7a2fcb28fd449ba06c.jpg',
    'https://i.pinimg.com/564x/cb/43/47/cb4347881b1015a1018bb299e31b17ee.jpg'
  ]
  
  return (
    <div className="App">
      <Carousel
        imageLinks={listImageLink}
        numberImageShowPerTime={2}
      />
    </div>
  );
}

export default App;
