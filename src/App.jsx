import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Header from "./components/Header"
import Footer from "./components/Footer"
import data from './mocks/data.json';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col h-screen justify-between">
                <div className="mx-6 mt-6">
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home data={data}/>}></Route>
                        <Route path='/:recipeId' element={<RecipeDetails/>}></Route>
                    </Routes>
                </div>         
                <Footer />
            </div>         
        </BrowserRouter>
    )
}

export default App




