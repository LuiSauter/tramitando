import React, { useEffect } from 'react'
import { useDescriptionTramit } from '../../context/descriptionTramitContext'
import { Link, useLocation } from 'wouter'

function MenuDis({ title, id }) {
  const [location, navigate] = useLocation()
  console.log(location === `/tramite/${id}`)
  return (
    <Link href={`/tramite/${id}`}>
      <a className={`${location === `/tramite/${id}` ? 'bg-green-300/20 text-green-500 font-medium' : ''} snap-center w-full transition-all py-2 hover:bg-[#f0eef9] rounded-lg text-base px-3 leading-5`}>
        {title}
      </a>
    </Link>
  )
}

function EstadoTramite({ estado, namePedido }) {
  return (
    <div className='flex justify-around w-64 h-9 border-[#fdfffe] border rounded-lg items-center cursor-pointer  hover:bg-blue-950'>
      <p className='text-[#fdfffe] truncate px-2 hover:text-clip]'>{namePedido}</p>
      <i className='text-[#fdfffe] border-l px-2'>{estado}</i>
    </div>
  )
}

const tramites = [
  {
    estado: 'En proceso',
    namePedido: 'alcaltarillado'
  },
  {
    estado: 'Tramitando',
    namePedido: 'escuela'
  },
  {
    estado: 'Tramitado',
    namePedido: 'llamada'
  }
]

const Layout = ({ children }) => {
  const { descriptionTramit, allDescriptionTramits } = useDescriptionTramit()
  let cleanup = true
  useEffect(() => {
    cleanup && allDescriptionTramits()
    return () => {
      cleanup = false
    }
  }, [])

  return (
    <div className='flex flex-row relative min-h-screen'>
      <aside id='MenuDistritos' className='hidden w-full max-w-[300px] relative h-screen transition md:sticky top-0 left-0 right-0 bottom-0 md:flex flex-col lg:items-center'>
        <div className='h-full py-4 overflow-y-auto w-full'>
          <div className='flex-col justify-center items-center h-16 w-full'>
            <img
              src='https://static.eldeber.com.bo//Files/Sizes/2021/5/3/imegeninstitucional-alcalda-santa-cruz-de-la-sierra-creativo_492523157_760x520.jpg' alt='avatar'
              className='w-28 h-16 mx-auto' id='img-menu'
            />
          </div>
          <div
            id='contenedor-menu' className='flex-col items-center justify-evenly flex transition duration-700 ease-in-out scroll-ms-2 relative w-full snap-y px-4 gap-1 pb-4 pt-4'
          >
            {
              descriptionTramit && descriptionTramit.map(({ title, _id }) => {
                return (
                  <MenuDis title={title} id={_id} key={_id} />
                )
              })
            }
          </div>
        </div>
      </aside>
      <main className='flex w-full relative flex-col h-screen overflow-hidden'>
        <header className='sticky top-0 left-0 right-0 h-[64px]'>
          <nav className='h-[64px] flex w-full flex-row justify-between px-6 items-center'>
            <Link href='/'>
              <a>
                <h1 className='text-base font-bold'>Tramitando</h1>
              </a>
            </Link>
            <button className='text-base text-gray-500 hover:text-black transition-all font-medium'>Iniciar sesión</button>
          </nav>
        </header>
        <div className='w-full h-full overflow-y-auto relative'>{children}</div>
      </main>
      <aside id='MenuRegistro' className=' h-screen transition duration-700 ease-in-out lg:sticky hidden top-0 right-0 bottom-0 left-0 relative flex-col items-center w-full max-w-[300px] lg:flex bg-[#f8f7fd]'>
        <div
          id='contenedor-menu-barrio' className='gap-2 flex-col items-center flex fixed top-14 bottom-0 lg:justify-start justify-center w-screen lg:w-10/12 h-[calc(100vh-56px)] lg:relative lg:flex  transition  duration-700 ease-in-out scroll-ms-2 z-50 inset-0
            snap-y hidden'
        >
          <img src='https://cdn-icons-png.flaticon.com/512/992/992490.png' className='h-32 w-32' alt='' />
          <p className=' font-semibold text-lg'>Miguel Angel Gutierrez Santalla</p>
          <p className='font-semibold text-lg'>Gatitofeliz3211@gmail.com</p>
          {
            tramites.map(({ estado, namePedido }) => {
              return (
                <EstadoTramite
                  key={namePedido}
                  namePedido={namePedido}
                  estado={estado}
                />
              )
            })
          }
        </div>
      </aside>
    </div>
  )
}

export default Layout
