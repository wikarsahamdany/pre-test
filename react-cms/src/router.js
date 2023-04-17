import {createBrowserRouter} from 'react-router-dom'
import Dasboard from './views/Dasboard';
import Layout from './components/Layout';
import Customer from './views/Customer';
import Category from './views/Category';
import History from './views/History';
import AddCustomer from './views/AddCustomer';
import EditCustomer from './views/EditCustomer';


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Dasboard/>
        },
        {
            path: "/customer",
            element: <Customer/>
        },
        {
            path: "/category",
            element: <Category/>
        },
        {
            path: "/history",
            element: <History/>
        },
        {
            path: "/addCustomer",
            element: <AddCustomer/>
        },
        {
            path: "/editCustomer/:id",
            element: <EditCustomer/>
        }
    ]
  }
]);

export default router