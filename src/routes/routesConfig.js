import HomePage from '@containers/HomePage';
import WorkBookPage from '@containers/WorkBookPage';
import Plug from '@containers/Plug';

const routesConfig = [
    {
        exact:false, 
        path:'/',
        element:<WorkBookPage/>,
        indexElemet:<HomePage/>,

        routes: [
            {
                exact:false, 
                path:'/plug',
                element:<Plug/>,
            }
        ]
    }
]

export default routesConfig;