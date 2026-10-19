import type { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section className="modal" role="dialog" aria-modal="true" aria-label="Modal">
        <button className="button" type="button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </section>
    </div>
  )
}