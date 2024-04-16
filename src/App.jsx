import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import NotFound from './pages/404'
import Home from './pages/Home'
import Store from './pages/Store'
import Cart from './pages/Cart'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'store/',
                element: <Store />
            },
            {
                path: 'cart/',
                element: <Cart />
            },
        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
