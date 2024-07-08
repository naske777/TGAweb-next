'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ text, className }) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className={className}>
      {text}
    </button>
  )
}