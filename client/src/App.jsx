import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from './pages/NotFoundPage';
import Signup from "./components/Signup";
import SignedOut from "./components/SignedOut";
import Signin from "./components/Signin";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Signup" element={<Signup/>} /> 
      <Route path="/SignOut" element={<SignedOut/>}/>
      <Route path="Signin" element={<Signin/>}/>
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
)};

export default App;

