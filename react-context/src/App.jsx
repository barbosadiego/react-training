import './App.scss';

import LoginForm from './components/LoginForm';
import User from './components/User';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <section className="container">
      <div>
        <UserProvider>
          <User />
          <LoginForm />
        </UserProvider>
      </div>
    </section>
  );
};

export default App;
