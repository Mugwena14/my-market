import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

const App = () => {
    
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>

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