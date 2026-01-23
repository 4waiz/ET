import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/Layout'
import { PageTransition } from './components/PageTransition'
import { RouteProgress } from './components/RouteProgress'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Product from './pages/Product'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const Resources = lazy(() => import('./pages/Resources'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <RouteProgress routeKey={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/product"
            element={
              <PageTransition>
                <Product />
              </PageTransition>
            }
          />
          <Route
            path="/solutions"
            element={
              <PageTransition>
                <Solutions />
              </PageTransition>
            }
          />
          <Route
            path="/pricing"
            element={
              <PageTransition>
                <Pricing />
              </PageTransition>
            }
          />
          <Route
            path="/resources"
            element={
              <PageTransition>
                <Suspense fallback={<div className="container py-24">Loading resources...</div>}>
                  <Resources />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PageTransition>
                <Suspense fallback={<div className="container py-24">Loading article...</div>}>
                  <BlogPost />
                </Suspense>
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App

