import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/transaction" element={<Transaction></Transaction>}></Route> */}
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
