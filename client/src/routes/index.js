import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>

                <Route/>
            </Routes>
        </Router>
    )
}