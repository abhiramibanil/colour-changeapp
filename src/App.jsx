import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [selectedColor, setSelectedColor] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    setSelectedColor(color);
    setClickedButton(color);
    setTimeout(() => setClickedButton(null), 500); // Reset the clicked button after 500ms
  };

  const handleReset = () => {
    setBackgroundColor('#fff'); // Reset background color to white
    setSelectedColor(null); // Reset selected color
  };

  const getColorButtonStyle = (color) => {
    if (selectedColor === color) {
      return { backgroundColor: 'black', color: '#fff' };
    } else {
      return {};
    }
  };

  return (
    <div className="app" style={{ backgroundColor }}>
    <div className='title'>
       <h1><span style={{color:'black'}}>Background Color Change</span></h1>
    </div>
      <div className="color-buttons">
        
        <button
          style={getColorButtonStyle('#00FF00')}
          onClick={() => handleColorChange('#00FF00')}
          className={clickedButton === '#00FF00' ? 'button-animation' : ''}
        >
          GREEN
        </button>
        <button
          style={getColorButtonStyle('#dd28b0')}
          onClick={() => handleColorChange('#dd28b0')}
          className={clickedButton === '#dd28b0' ? 'button-animation' : ''}
        >
          PINK
        </button>
        <button
          style={getColorButtonStyle('#122ced')}
          onClick={() => handleColorChange('#122ced')}
          className={clickedButton === '#122ced' ? 'button-animation' : ''}
        >
          BLUE
        </button>
        <button
          style={getColorButtonStyle('#FFFF00')}
          onClick={() => handleColorChange('#FFFF00')}
          className={clickedButton === '#FFFF00' ? 'button-animation' : ''}
        >
          YELLOW
        </button>
        <button
          style={getColorButtonStyle('#FF7F00')}
          onClick={() => handleColorChange('#FF7F00')}
          className={clickedButton === '#FF7F00' ? 'button-animation' : ''}
        >
          ORANGE
        </button>
        
      </div>
      <div className="reset-button">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;