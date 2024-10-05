

const Main = ({ children, classN }) => {
  return (

    <main className={`pl-60 pt-28 w-full flex flex-col justify-start items-center ${classN}`} >{children}</main>
  )
}

export default Main