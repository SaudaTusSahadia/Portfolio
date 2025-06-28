import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home'
import Banner from './components/Banner';
import Education from './components/Education';
import Contact from './pages/Contact';
import Skills from './components/Skills';
import Blog from './pages/Blog';
import Experiences from './components/Experiences';
import ProjectSection from './components/ProjectSection';
import ProjectCard from './components/ProjectCard';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: "/iAm",
        Component: Banner
      },
      {
        path: "/education",
        Component: Education
      },
      {
        path: "/contacts",
        Component: Contact
      },
      {
        path: "/skills",
        Component: Skills
      },
      {
        path: "/blog",
        Component: Blog
      },
      {
        path: "/experience",
        Component: Experiences
      },
      {
        path: "/projects",
        Component: ProjectSection
      },
      {
        path: "/projectCard/:id",
        Component: ProjectCard
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
