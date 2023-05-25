import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'
import Admin from '../pages/admin/Admin'
import Critica from '../pages/critica/Critica'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/criticas/:id' element = {<Critica/>}/>
                <Route/>
            </Routes>
        </Router>
    )
}