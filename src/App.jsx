import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/Index" element={<HomePage/>}></Route>
          <Route path="/About" element={<AboutPage/>}></Route>
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