import {Route,Routes} from 'react-router-dom'

import Login from "./Component/Login"
import Jobs  from "./Component/jobs"
import Home from "./Component/Home"
import NotFound from './Component/NotFound'

const App =()=>(
    
    <Routes>
        
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/jobs' element={<Jobs/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>

    </Routes>
)


export default App
