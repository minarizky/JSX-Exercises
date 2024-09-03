// FirstComponent
function FirstComponent() {
    return <h1>My very first component</h1>;
  }
  
  // NamedComponent
  function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
  }
  
  // App Component
  function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Mina" />
      </div>
    );
  }
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  