
import { PixelModal } from '@pxlkit/ui-kit'
import type { ReactNode } from 'react'

interface WindowShellProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

// @doc MODAL-OPEN-CLOSE
function WindowShell({
  open,
  title,
  onClose,
  children,
}: WindowShellProps) {
  return (
    <PixelModal
      open={open}
      title={title}
      onClose={onClose}
      surface="pixel"
    >
      {children}
    </PixelModal>
  )
}

export default WindowShell
