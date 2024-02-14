import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/pages/About.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Contact from './components/pages/Contact.jsx';
import Resume from './assets/Resume.jsx';
import Project from './assets/Project.jsx';
import './index.css';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'resume',
          element: <Resume />,
        },
        {
          path: 'project',
          element: <Project />,
        },
        {
          path: 'ResumeJesus',
          element: <Resume />,
        }
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
