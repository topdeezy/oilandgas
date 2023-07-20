import Navbar from '../navbar/Navbar'

function layout({children}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default layout