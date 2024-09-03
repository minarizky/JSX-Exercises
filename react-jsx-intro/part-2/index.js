// Tweet Component
function Tweet({ username, name, date, message }) {
    return (
      <div className="tweet">
        <h3>@{username} ({name})</h3>
        <p>{message}</p>
        <small>{date}</small>
      </div>
    );
  }
  
  // App Component
  function App() {
    return (
      <div>
        <Tweet 
          username="user1" 
          name="Alice" 
          date="Sep 3, 2024" 
          message="This is my first tweet!" 
        />
        <Tweet 
          username="user2" 
          name="Bob" 
          date="Sep 2, 2024" 
          message="Hello, Twitter!" 
        />
        <Tweet 
          username="user3" 
          name="Charlie" 
          date="Sep 1, 2024" 
          message="React is awesome!" 
        />
      </div>
    );
  }
  
  // Render the App component into the root div
  ReactDOM.render(<App />, document.getElementById('root'));
  