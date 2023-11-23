import { MenuDis } from "../../hacka/src/distritosMenu"
import { EstadoTramite } from "./tramitesEvento"
const tramites = [
  {
    estado: "En proceso",
    namePedido:"alcaltarillado"
  }, 
  {
    estado: "Tramitando",
    namePedido:"escuela"
  }, 
  {
    estado: "Tramitado",
    namePedido:"llamada"
  }
]

const ListBuscador =[
  {
    text:"Distrito 1",
    logo:"home"
  },
  {
    text:"Distrito 2",
    logo:"search-outline"
  },
  {
    text:"Distrito 3",
    logo:"compass-outline"
  },
  {
    text:"Distrito 4",
    logo:"videocam-outline"
  },
  {
    text:"Distrito 5",
    logo:"paper-plane-outline"
  },
  {
    text:"Distrito 6",
    logo:"heart-outline"
  },
  {
    text:"Distrito 7",
    logo:"add-circle-outline"
  },
  {
    text:"Distrito 8",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 9",
    logo:"menu-outline"
  },
  {
    text:"Distrito 10",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 11",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 12",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 13",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 14",
    logo:"person-circle-outline"
  },
  {
    text:"Distrito 15",
    logo:"person-circle-outline"
  }
]

function App() {
  const quitarHidden1 = ()=>{
    const contenedor = document.querySelector('#contenedor-menu')
    contenedor.classList.toggle('hidden')
    const abrirBarrio = document.querySelector('#MenuRegistro')
    const publicacion = document.querySelector('#publicacion')
    publicacion.classList.toggle('hidden')
    abrirBarrio.classList.toggle('hidden') 
  }
  const quitarHiddenbarrio1 = ()=>{
    const contenedor = document.querySelector('#contenedor-menu-barrio')
    contenedor.classList.toggle('hidden')
    const abrirBarrio = document.querySelector('#MenuDistritos')
    const publicacion = document.querySelector('#publicacion')
    publicacion.classList.toggle('hidden')
    abrirBarrio.classList.toggle('hidden') 
  }


  return (
    <>
       <aside id="MenuDistritos" className="lg:w-[260px]  w-auto relative overflow-auto h-auto transition lg:fixed bg-[#12233d]   lg:h-screen top-0 left-0 flex flex-col lg:items-center   ">
        <div className="hidden lg:flex flex-col justify-center items-center lg:w-64 h-auto py-2">
          <img src="https://static.eldeber.com.bo//Files/Sizes/2021/5/3/imegeninstitucional-alcalda-santa-cruz-de-la-sierra-creativo_492523157_760x520.jpg" alt="avatar" 
            className="w-28 h-16 rounded-[200px]" id="img-menu"
          />
        </div>
        <div id="contenedor-menu" className="flex-col items-center flex fixed top-14 lg:top-2 bottom-0 justify-evenly w-screen lg:w-10/12 h-[calc(100vh-56px)] lg:relative lg:flex  transition  duration-700 ease-in-out scroll-ms-2 z-50 inset-0 bg-[#12233d]  
          snap-y hidden" >
            {
              ListBuscador.map( ({text}) => {
                return(
                  <MenuDis
                    text={text}
                    key={text}
                  >
                  </MenuDis>
                ) 
              } )
            }
          </div>
      </aside>

      <div className="flex flex-col  lg:items-center w-screen  lg:w-[calc(100%-510px)] h-screen  bg-[#1b2a3e] lg:justify-center lg:h-screen ">
        <header className="w-full lg:hidden flex justify-between bg-blue-400 h-14 items-center ">
          <i id="icono-abrir" onClick={quitarHidden1} className="bg-black cursor-pointer flex text-white w-auto h-auto p-1 text-5xl lg:hidden transition  duration-700 ease-in-out"><ion-icon  name="menu-outline"></ion-icon></i> 
          <nav className=" felx lg:justify-between">
              <a href="" className="m-4">contactos</a>
              <a href="" className="m-4">llamadas</a>
              <a href="" className="m-4">ayuda</a>
          </nav>
          <i id="icono-abrir-barrio" onClick={quitarHiddenbarrio1} className="bg-black cursor-pointer flex text-white w-auto h-auto p-1 text-5xl lg:hidden transition  duration-700 ease-in-out"><ion-icon name="person-outline"></ion-icon></i>
        </header>
        {/*  --------------------Iniciar Sesion-------------------
          <div id="publicacion" className="text-white h-screen lg:h-96 w-screen lg:w-[350px] bg-white flex justify-center items-center flex-col lg:rounded-2xl"> 
            <img src="https://cdn-icons-png.flaticon.com/512/992/992490.png" alt="usu" className="rounded-full h-24" />
            <p className="font-extrabold text-2xl text-black">Bienvenido de nuevo</p>
            <form>
                <label className="block">
                    <span className="block my-2 font-semibold text-black">Email:</span>
                    <input type="text" placeholder="MaiEmail@gamil.com" 
                    className="border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-1
                     focus:ring-sky-500 text-black"/>
                </label>
                <label className="block">               
                    <span className="block my-2 font-semibold text-black">Password:</span>
                    <input type="password" placeholder=""
                    className="border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black"/>
                </label>
            </form>
            <button className="px-3 py-2 rounded-md bg-sky-500 my-3  hover:bg-sky-600 text-white w-52">Iniciar Sesión</button>
            <a href="" className="text-sm text-slate-400">¿No tiene cuenta?</a>
          </div>*/}
          <div id="publicacion" className="text-white h-screen lg:h-[450px] w-screen lg:w-[400px] lg:bg-white bg-[#1b2a3e] flex justify-center items-center flex-col lg:rounded-2xl"> 
            <img src="https://cdn-icons-png.flaticon.com/512/992/992490.png" alt="usu" className="cursor-pointer rounded-full h-24" />
            <p className="font-extrabold text-2xl text-[#fdfffe] lg:text-[#1b2a3e]">Registrate gratis</p>
            <form>
                <label className="block">
                    <span className="block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]">Email:</span>
                    <input type="text" placeholder="MaiEmail@gamil.com" 
                    className="border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-1
                     focus:ring-sky-500 text-[#1b2a3e]"/>
                </label>
                <label className="block">
                    <span className="block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]">Nombre:</span>
                    <input type="text" placeholder="Juanito alcachofa" 
                    className="border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-1
                     focus:ring-sky-500 text-[#1b2a3e]"/>
                </label>
                <label className="block">               
                    <span className="block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]">Password:</span>
                    <input type="password" placeholder=""
                    className="border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-[#1b2a3e]"/>
                </label>
            </form>
            <button className="px-3 py-2 rounded-md bg-sky-500 my-3  hover:bg-sky-600 text-[#fdfffe] w-52">Iniciar Sesión</button>
            <a href="" className="text-sm text-slate-400">¿No tiene cuenta?</a>
          </div>
      </div>

      <aside  id="MenuRegistro" className="relative  bg-[#12233d]  overflow-auto w-auto h-auto transition  duration-700 ease-in-out lg:fixed lg:h-screen  top-0 right-0 flex flex-col lg:items-center lg:w-[280px] ">
        <div id="contenedor-menu-barrio" className="gap-2 flex-col items-center flex fixed top-14 bottom-0 lg:justify-start justify-center w-screen lg:w-10/12 h-[calc(100vh-56px)] lg:relative lg:flex  transition  duration-700 ease-in-out scroll-ms-2 z-50 inset-0 bg-[#12233d] 
          snap-y hidden">
          <img src="https://cdn-icons-png.flaticon.com/512/992/992490.png" className="h-32 w-32" alt="" />
          <p className="text-[#fdfffe] font-semibold text-lg">Miguel Angel Gutierrez Santalla</p>
          <p className="text-[#fdfffe] font-semibold text-lg">Gatitofeliz3211@gmail.com</p>
          {
              tramites.map( ({estado,namePedido}) => {
                return(
                  <EstadoTramite
                  key={namePedido}
                  namePedido={ namePedido}
                  estado={estado}
                  ></EstadoTramite>
                ) 
              } )
            }
          </div>
      </aside>
    </>
  )
}

export default App
