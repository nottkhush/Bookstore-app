import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBooks from './pages/ShowBooks'
import EditBooks from './pages/EditBooks'
import DeleteBooks from './pages/DeleteBooks'

function App() {

  return (
    <Routes>
      <Route path='bookstore-app-ivory.vercel.app/' element={<Home />} />
      <Route path='bookstore-app-ivory.vercel.app/books/create' element={<CreateBooks />} />
      <Route path='bookstore-app-ivory.vercel.app/books/details/:id' element={<ShowBooks />} />
      <Route path='bookstore-app-ivory.vercel.app/books/edit/:id' element={<EditBooks />} />
      <Route path='bookstore-app-ivory.vercel.app/books/delete/:id' element={<DeleteBooks />} />
    </Routes>
  )
}

export default App
