// Person Component
function Person({ name, age, hobbies }) {
    // Limit name to first 6 characters if longer than 8 characters
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <h2>Name: {displayName}</h2>
        <h3>Age: {age}</h3>
        <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
        <ul>
          {hobbies.map(hobby => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  // App Component
  function App() {
    return (
      <div>
        <Person name="Alexander" age={20} hobbies={["Reading", "Gaming", "Coding"]} />
        <Person name="Sam" age={16} hobbies={["Swimming", "Running", "Painting"]} />
        <Person name="Christina" age={25} hobbies={["Cooking", "Traveling", "Dancing"]} />
      </div>
    );
  }
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  