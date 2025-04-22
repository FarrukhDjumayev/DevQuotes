'use client'

import QuoteBox from '@/app/components/QuoteBox'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Kontent qismi – markazda turadi */}
      <div className="flex flex-1 items-center justify-center px-4">
        <QuoteBox />
      </div>

      {/* Footer doimo eng pastda  */}
      <Footer className="mt-auto w-full py-4 text-center text-sm opacity-70" />
    </main>
  )
}
