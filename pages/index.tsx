export default function Home() {
  return (
    <div
      className="flex w-full h-screen
      justify-center items-center bg-gradient-to-r
      from-sky-200 via-sky-100 to-sky-200"
    >
      <div
        className="flex flex-col justify-evenly
        items-center bg-white rounded-3xl w-10/12 sm:w-3/4 h-5/6 sm:h-4/6"
      >
        <h1
          className="font-sans font-black text-5xl
        text-sky-700 lg:text-9xl md:text-8xl sm:text-7xl"
        >
          Welcome!
        </h1>
        <div className="flex flex-col xl:flex-row justify-evenly items-center w-full">
          <button
            type="button"
            className="text-xl sm:text-2xl font-bold
            text-sky-700 bg-sky-200 border-solid
            border-2 border-sky-700 w-56 py-3 my-1 rounded-lg"
          >
            Site Features
          </button>
          <button
            type="button"
            className="text-xl sm:text-2xl font-bold
            text-sky-700 bg-sky-200 border-solid
            border-2 border-sky-700 w-56 py-3 my-1 rounded-lg"
          >
            Github Page
          </button>
          <button
            type="button"
            className="text-xl sm:text-2xl font-bold
            text-sky-700 bg-sky-200 border-solid
            border-2 border-sky-700 w-56 py-3 my-1 rounded-lg"
          >
            Social Networks
          </button>
          <button
            type="button"
            className="text-xl sm:text-2xl font-bold
            text-sky-700 bg-sky-200 border-solid border-2
            border-sky-700 w-56 py-3 my-1 rounded-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}
