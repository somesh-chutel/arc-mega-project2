import {Route,Routes} from 'react-router-dom'

import Login from "./Component/Login"
import Jobs  from "./Component/jobs"
import Home from "./Component/Home"
import NotFound from './Component/NotFound'
import ProtectedRoute from './Component/ProtectedRoute'

const App =()=>(
    
    <Routes>
        
            <Route path='/' element={<ProtectedRoute Component={Home}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/jobs' element={<ProtectedRoute Component={Jobs}/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>

    </Routes>
)


export default App
