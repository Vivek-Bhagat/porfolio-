'use client'
import { AnimatePresence } from "framer-motion";
import Preloader from '../components/Preloader'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader/>}
    </AnimatePresence>
    </main>
  );
}
