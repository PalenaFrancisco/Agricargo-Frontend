

const Main = ({ children, classN }) => {
  return (
    <main className={`pl-60 pt-32 w-full h-dvh flex flex-col justify-start items-center ${classN}`} >{children}</main>
  )
}

export default Main