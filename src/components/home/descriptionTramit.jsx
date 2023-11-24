import React, { useEffect, useState } from 'react'
import { useDescriptionTramit } from '../../context/descriptionTramitContext'

const DescriptionTramit = ({ id }) => {
  const { getDescriptionTramit } = useDescriptionTramit()
  const [descriptionTramit, setDescriptionTramit] = useState({})
  useEffect(() => {
    getDescriptionTramit(id)
      .then((res) => setDescriptionTramit(res))
    return () => {

    }
  }, [id])

  return (
    <main>
      {/* <header id='main-header'>

        <nav>
          <ul id='ul-header'>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Acerca de</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </nav>

      </header> */}

      <section id='main-content'>

        <article>
          <header className=''>
            <h1 className='text-xl font-bold px-4 pb-4'>{descriptionTramit.title}</h1>
          </header>
          <div className='px-4 relative flex flex-col gap-3'>
            <div
              className='group flex flex-col gap-2 rounded-lg bg-[#f0eef9] p-4'
              tabIndex='1'
            >
              <div className='flex cursor-pointer items-center justify-between'>
                <span className='font-medium'>Descripción</span>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png'
                  className='h-2 w-3 transition-all duration-500 group-focus:-rotate-180'
                />
              </div>
              <div
                className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000'
              >
                {descriptionTramit.description}
              </div>
            </div>

            <div
              className='group flex flex-col gap-2 rounded-lg bg-[#f0eef9] p-4'
              tabIndex='2'
            >
              <div className='flex cursor-pointer items-center justify-between'>
                <span className='font-medium'>Requisitos</span>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png'
                  className='h-2 w-3 transition-all duration-500 group-focus:-rotate-180'
                />
              </div>
              <div
                className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000'
              >
                {descriptionTramit.requirement}
              </div>
            </div>
          </div>
          <div className='pt-4 px-4 relative'>Precio: Bs {descriptionTramit.precio}</div>

        </article>

      </section>

      <main id='main-footer' />

    </main>
  )
}

export default DescriptionTramit
