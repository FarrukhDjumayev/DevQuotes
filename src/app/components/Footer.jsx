import React from 'react'

const Footer = ({ className = '' }) => {
  // Hozirgi yilni avtomatik olish
  const year = new Date().getFullYear()

  return (
    <footer
      className={`
        w-full py-4 text-center text-xs font-thin transition-opacity
        text-green-600 dark:text-green-400
        hover:opacity-100 opacity-80
        ${className}
      `}
    >
      © {year} Created by Farrukh
    </footer>
  )
}

export default Footer
