import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { About, Home, Login, Upload, PasswordReset } from 'pages';
import ErrorPage from 'components/ErrorPage';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} errorElement={<ErrorPage/>}/>
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<PasswordReset />} />
          <Route path="home" element={<Home />} >
            <Route path="upload" element={<Upload />} />
            <Route path="about" element={<About />} />
            <Route index element={<Upload />} />
          </Route> 
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;