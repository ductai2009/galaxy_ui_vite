import { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function App() {
    const notify = () => {
        toast(CustomComponent, {
            autoClose: 8000,
            customProgressBar: true,
        });
    };
    function ScrollToTop() {
        const location = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);

        return null;
    }
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <ToastContainer />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export { App };

export default App;
