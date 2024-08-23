import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/:recipeId' element={<RecipeDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
