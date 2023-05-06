
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllPost from './pages/AllPost'
import CreatePost from './pages/CreatePost'
import SinglePost from './pages/SinglePost'

function App() {

  return (
    <>
      <div className='text-slate-800 text-4xl font-semibold mb-4'>
        <h1>All Posts</h1>
      </div>
      <Routes>
        <Route path='/' element={<AllPost/>} />
        <Route path="/:id" element={<SinglePost/>} />
        <Route path="/create" element={<CreatePost/>} />
      </Routes> 
    </>
  )
}

export default App
