import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QuizProvider } from './context/quiz';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <QuizProvider>
    <App />
  </QuizProvider>
)
