
import anit from '../src/assets/anitkabir.svg'
import './App.css'
import kasım10 from '../src/assets/ataturk.svg'
import TurkishFlagVideo from "./components/TurkishFlagVide0.tsx";
import AutoPlayMusic from "./components/AutoPlayMusic.tsx";

function App() {

  return (
      <>
          <AutoPlayMusic/>
          <div className={'relative h-full min-h-screen overflow-hidden  bg-black w-full'}>
              <div className={'text-white absolute flex-col lg:flex-row flex text-white text-[32px] justify-center w-full z-20 top-0 left-0'}>


                  <img className={'w-[450px] lg:w-[550px] mr-[72px]  '} src={kasım10} alt=""/>
                  <h6 className={'text-center lg:flex hidden uppercase font-extrabold text-white mt-8 leading-[65Px] text-[64px]'}>
                      Saygı
                      <br/>
                      ve
                      <br/>
                      özlemle
                      <br/>
                      ANIYORUZ
                  </h6>
              </div>
              <div className={'h-[750px] w-full overflow-hidden'}>
                  <img className={'w-full z-20 object-cover sticky bottom-0  mt-[250px]  left-0   h-[750px]'} src={anit} alt=""/>

              </div>
              <TurkishFlagVideo/>
          </div>
      </>
  )
}

export default App
