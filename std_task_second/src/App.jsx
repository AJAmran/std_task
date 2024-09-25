import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/HeroSection"));
const Services = lazy(() => import("./components/Services"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Services />
    </Suspense>
  );
}
 