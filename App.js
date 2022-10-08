import {HashRouter,Routes,Route} from 'react-router-dom';
import{ HomePage} from './components/HomePage';
import { Blog } from './components/Blog';
import { Profile } from './components/Profile';
import {Error404} from './components/Error404';
import { Menu } from './components/Menu';
import {BlogPost} from './components/Blogpost';
import {Login} from './components/Login';
import {Loguot} from './components/Loguot';
import { AuthProvider } from './components/auth';

export const App = () => {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>

                        <Route path='/blog' element={<Blog/>}>
                        <Route path='/blog/:slug' element={<BlogPost/>}/>
                        </Route>

                        <Route path='/login' element={<Login/>}/>
                        <Route path='/logout' 
                        element={
                        <AuthProvider>
                            <Loguot/>
                        </AuthProvider>
                        }/>

                        <Route path='/profile' 
                        element={
                        <AuthProvider>
                            <Profile/>
                        </AuthProvider>
                        }/>
                        <Route path='*' element={<Error404/>}/>
                    </Routes>
                    </AuthProvider>
            </HashRouter>
        </>
    )
}