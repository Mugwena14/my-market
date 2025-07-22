import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ExplorePage from './Pages/ExplorePage'
import ViewPage from './Pages/ViewPage'
import AddProducts from "./Pages/AddProduct"
import TermsPage from "./Pages/TermsPage"
import PrivacyPage from "./Pages/PrivacyPage"

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/Index" element={<HomePage/>}></Route>
          <Route path="/About" element={<AboutPage/>}></Route>
          <Route path="/Explore" element={<ExplorePage/>}></Route>
          <Route path="/View" element={<ViewPage/>}></Route>
          <Route path="/Sell" element={<AddProducts/>}></Route>
          <Route path="/Terms" element={<TermsPage/>}></Route>
          <Route path="/Privacy" element={<PrivacyPage/>}></Route>
        </Route>
      )
    )

    return (
      <div>
        <RouterProvider router={router}/>

      </div>
    )
}

export default App