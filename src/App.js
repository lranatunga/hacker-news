
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import './Max.css';
import HomePage from './Pages/HomePage';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import SearchPage from './Pages/SearchPage';
import NewPage from './Pages/NewPage';
import CommentsPage from './Pages/Comments';
import AskPage from './Pages/Ask';
import PastPage from './Pages/PastPage';
import ShowPage from './Pages/Show';
import JobsPage from './Pages/Jobs';
// import Users from './Componets/User';
import LoginForm from './Pages/LogInPage'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/new' element={<NewPage/>}/>
          <Route path='/ask' element={<AskPage />} />
          <Route path='/comments' element={<CommentsPage/>}/>
          <Route  path='/show' element={<ShowPage/>}/>
          <Route path='/past' element={<PastPage/>}/>
          <Route path='/jobs' element={<JobsPage/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          {/* <Route path='/users' element={<Users/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

