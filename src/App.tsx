import React from "react";
import "./App.css";
import AuthProvider, { AuthContext } from "./Context/AuthContext";
import AppRoutes from "./Routes";

function App() {
  const { userInfo } = React.useContext(AuthContext);
  return (
    <div className="App">
      <main>
        <AuthProvider>
          <AppRoutes isAuthenticated={userInfo.loggedIn}/>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;
