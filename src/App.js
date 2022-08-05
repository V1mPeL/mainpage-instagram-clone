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
        <main>
          <Routes>
            <Route path="instagram-clone/" element={<Main/>}/>
            <Route path="instagram-clone/direct" element={<Direct/>}/>
            <Route path="instagram-clone/post" element={<Post/>}/>
            <Route path="instagram-clone/explore" element={<Explore/>}/>
            <Route path="instagram-clone/profile" element={<Profile/>}/>
          </Routes>
        </main>
      </div>
  </Router>
  )
}

export default App;
