import React, { cloneElement, createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'

const ModalContext = createContext()

export default function Modal({ children }) {
  const [openName, setOpenName] = useState('')
  const closeModalFn = () => setOpenName('')
  const openModalFn = setOpenName

  return <ModalContext.Provider value={{ openName, closeModalFn, openModalFn }}>
    {children}
  </ModalContext.Provider>
}

function Open({ children, name }) {
  const { openModalFn } = useContext(ModalContext)

  return cloneElement(children, { onClick: () => openModalFn(name) })
}

function Window({ children, name }) {
  const { openName, closeModalFn } = useContext(ModalContext)

  const { ref } = useOutsideClick(closeModalFn, true)

  if (name !== openName) return

  return createPortal(
    <div className="fixed inset-0 z-20 flex justify-center items-center w-full h-screen bg-COLOR-11 bg-opacity-40">
      <div ref={ref} className="p-6 relative bg-COLOR-9 rounded-xl shadow-lg text-white">
        <button onClick={closeModalFn} className="absolute top-6 right-6"><HiXMark className="size-6" /></button>
        <div>{cloneElement(children, { onCloseModal: () => closeModalFn(openName) })}</div>
      </div>
    </div>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

function useOutsideClick(handler, listenCapturing = true, ignoreCondition = () => false) {
  const ref = useRef()

  function hanldeOutsideClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      handler()
    }
  }

  useEffect(() => {
    document.addEventListener('click', hanldeOutsideClick, listenCapturing)
    return () => document.removeEventListener('click', hanldeOutsideClick, listenCapturing)
  }, [hanldeOutsideClick, listenCapturing])

  return { ref }
}