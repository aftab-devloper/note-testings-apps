 'use client'

import { useState } from 'react'

type Props = {
  onSubmit: (title: string, content: string) => void
}

export default function NoteForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(title, content)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="note-form">
      <input
        data-testid="title-input"
        placeholder="Title likho"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        data-testid="content-input"
        placeholder="Content likho"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" data-testid="submit-btn">
        Save Note
      </button>
    </form>
  )
}
