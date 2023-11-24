import React from 'react'
import Layout from '../components/layout'
import { useParams, useRoute } from 'wouter'
import DescriptionTramit from '../components/home/descriptionTramit'
import Presentation from '../components/home/presentation'

const HomePage = () => {
  const [match] = useRoute('/tramite/:id')
  const params = useParams()

  const quitarHidden1 = () => {
    const contenedor = document.querySelector('#contenedor-menu')
    contenedor.classList.toggle('hidden')
    const abrirBarrio = document.querySelector('#MenuRegistro')
    const publicacion = document.querySelector('#publicacion')
    publicacion.classList.toggle('hidden')
    abrirBarrio.classList.toggle('hidden')
  }
  const quitarHiddenbarrio1 = () => {
    const contenedor = document.querySelector('#contenedor-menu-barrio')
    contenedor.classList.toggle('hidden')
    const abrirBarrio = document.querySelector('#MenuDistritos')
    const publicacion = document.querySelector('#publicacion')
    publicacion.classList.toggle('hidden')
    abrirBarrio.classList.toggle('hidden')
  }

  return (
    <div className='flex flex-col w-full'>
      {match ? <DescriptionTramit id={params.id} /> : <Presentation />}
      {/* <header className='w-full lg:hidden flex justify-between h-14 items-center '>
          <i id='icono-abrir' onClick={quitarHidden1} className='bg-black cursor-pointer flex text-white w-auto h-auto p-1 text-5xl lg:hidden transition  duration-700 ease-in-out'><ion-icon name='menu-outline' /></i>
          <nav className=' felx lg:justify-between'>
            <a href='' className='m-4'>contactos</a>
            <a href='' className='m-4'>llamadas</a>
            <a href='' className='m-4'>ayuda</a>
          </nav>
          <i id='icono-abrir-barrio' onClick={quitarHiddenbarrio1} className='bg-black cursor-pointer flex text-white w-auto h-auto p-1 text-5xl lg:hidden transition  duration-700 ease-in-out'><ion-icon name='person-outline' /></i>
        </header> */}
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
            </div> */}
      {/* <div id='publicacion' className='text-white min-h-screen h-full lg:bg-white bg-[#1b2a3e] flex justify-center items-center flex-col lg:rounded-2xl'>
        <img src='https://cdn-icons-png.flaticon.com/512/992/992490.png' alt='usu' className='cursor-pointer rounded-full h-24' />
        <p className='font-extrabold text-2xl text-[#fdfffe] lg:text-[#1b2a3e]'>Registrate gratis</p>
        <form>
          <label className='block'>
            <span className='block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]'>Email:</span>
            <input
              type='text' placeholder='MaiEmail@gamil.com'
              className='border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-1
                       focus:ring-sky-500 text-[#1b2a3e]'
            />
          </label>
          <label className='block'>
            <span className='block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]'>Nombre:</span>
            <input
              type='text' placeholder='Juanito alcachofa'
              className='border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-1
                       focus:ring-sky-500 text-[#1b2a3e]'
            />
          </label>
          <label className='block'>
            <span className='block my-2 font-semibold text-[#fdfffe] lg:text-[#1b2a3e]'>Password:</span>
            <input
              type='password' placeholder=''
              className='border-2 rounded-md w-full h-8 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-[#1b2a3e]'
            />
          </label>
        </form>
        <button className='px-3 py-2 rounded-md bg-sky-500 my-3  hover:bg-sky-600 text-[#fdfffe] w-52'>Iniciar Sesión</button>
        <a href='' className='text-sm text-slate-400'>¿No tiene cuenta?</a>
      </div> */}
    </div>
  )
}

export default HomePage
