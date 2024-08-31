import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import AdminAuth from "./pages/AdminAuth"
import data from './mocks/data.json';
import UserLayout from "./layouts/UserLayout"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route path='/' element={<Home data={data} />}></Route>
                    <Route path='/:recipeId' element={<RecipeDetails />}></Route>
                </Route>  
                <Route path='/admin' element={<AdminAuth />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App




