import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import Header from '../layout/Header';
import Product from '../layout/Product';

const guestRouter = createBrowserRouter([
  {
    path: '/',element: <> <Outlet /> </>,
    children: [
      { index: true, element: <Header/> },
      { path: '/register', element: <RegisterForm />},
      { path: '/login', element: <LoginForm />},
      { path: '/product', element: <Product/>},
     

    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/', element: <> <Header /></>,
    children : [
      { index: true, element: <Header /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <LoginForm /> },
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
          <Header />
      </>
    ),
    children: [
      { index: true, element: <Header /> },


    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  let finalRouter;

  if (user?.role === 'admin') {
    finalRouter = adminRouter;
  } else if (user?.id) {
    finalRouter = userRouter;
  } else {
    finalRouter = guestRouter;
  }

  return <RouterProvider router={finalRouter} />;
}
