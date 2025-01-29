import React from 'react'

interface RouterLayoutProps {
    children: React.ReactNode
}
const RouterLayout = ({children} : RouterLayoutProps) => {
  return (
    <>
    {/* Header and footer components */}    
    Navbar
        <div className='min-h-screen'>{children}</div>
    Footer
    </>
  )
}

export default RouterLayout