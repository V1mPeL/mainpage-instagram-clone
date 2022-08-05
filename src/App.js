import {Navbar} from './components/navbar/navbar'
import {Main} from './components/pages/main/main'
import {Direct} from './components/pages/direct/direct'
import {Post} from './components/pages/post/post'
import {Explore} from './components/pages/explore/explore'
import {Profile} from './components/pages/profile/profile'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/> 
        <Main >
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/direct" element={<Direct/>}/>
            <Route path="/post" element={<Post/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </Main>
      </div>
  </Router>
  )
}

export default App;
