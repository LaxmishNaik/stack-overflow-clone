import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllQuestions());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;

// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AllRoutes from './AllRoutes';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <AllRoutes />
//       </Router>
//     </div>
//   );
// }

// export default App;