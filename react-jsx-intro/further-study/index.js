// Alert Component
function Alert({ type, message }) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {message}
      </div>
    );
  }
  
  // Button Component
  function Button({ type, label, onClick }) {
    return (
      <button className={`btn btn-${type}`} onClick={onClick}>
        {label}
      </button>
    );
  }
  
  // App Component
  function App() {
    const handleClick = () => alert("Button clicked!");
  
    return (
      <div className="container">
        <h1>Bootstrap Components in React</h1>
        
        <Alert type="primary" message="This is a primary alert!" />
        <Alert type="danger" message="This is a danger alert!" />
        <Alert type="success" message="This is a success alert!" />
  
        <Button type="primary" label="Primary Button" onClick={handleClick} />
        <Button type="danger" label="Danger Button" onClick={handleClick} />
        <Button type="success" label="Success Button" onClick={handleClick} />
      </div>
    );
  }
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  