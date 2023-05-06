import crypto from '../assets/crypto.png'

const Landing = () => {
  return (
    <div className="h-screen w-full text-center bg-violet-500 pt-5" >
        <p className=" text-white text-6xl uppercase font-semibold tracking-widest"> sign up and get $10</p>
        <p className=" text-white text-xl uppercase mt-4 tracking-wide ">kiko mining is a cryptocurrency cloud mining platform</p>
        <button className="uppercase text-white bg-violet-700 px-4 py-2 rounded-md outline-none mt-4" >start mining</button>
        <img src={crypto} className="mx-auto mt-2 animate-pulse" alt="crypto server" />
    </div>
  )
}

export default Landing