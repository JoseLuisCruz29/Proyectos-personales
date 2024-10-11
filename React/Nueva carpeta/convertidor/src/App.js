import React, { useState } from 'react';
import './App.css'; // Estilos

const App = () => {
  const [text, setText] = useState('');
  const [highlightText, setHighlightText] = useState('');
  const [font, setFont] = useState('Helvetica');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleHighlightChange = (e) => {
    setHighlightText(e.target.value);
  };

  const handleFontChange = (font) => {
    setFont(font);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container">
      <h1>Text Decorator</h1>
      <div className="content">
        <div className="input-section">
          <label>Inserte el texto</label>
          <textarea value={text} onChange={handleTextChange} />
          <label>Texto a resaltar</label>
          <input type="text" value={highlightText} onChange={handleHighlightChange} />
          <div className="buttons">
            <button onClick={() => handleFontChange('Helvetica')}>Helvetica</button>
            <button onClick={() => handleFontChange('Courier')}>Courier</button>
            <button onClick={() => handleFontChange('Arial')}>Arial</button>
          </div>
        </div>
        <div className="result-section">
          <label>Result</label>
          <div className="result" style={{ fontFamily: font }}>
            {getHighlightedText(text, highlightText)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
