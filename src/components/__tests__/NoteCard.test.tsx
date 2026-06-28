 import { render, screen } from '@testing-library/react'
import NoteCard from '../NoteCard'

describe('NoteCard Component', () => {
  
  test('title sahi render hota hai', () => {
    render(<NoteCard title="Mera Note" content="Yeh content hai" />)
    
    const title = screen.getByTestId('note-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Mera Note')
  })

  test('content sahi render hota hai', () => {
    render(<NoteCard title="Mera Note" content="Yeh content hai" />)
    
    const content = screen.getByTestId('note-content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent('Yeh content hai')
  })

  test('note-card div render hota hai', () => {
    render(<NoteCard title="Test" content="Test content" />)
    
    expect(screen.getByTestId('note-card')).toBeInTheDocument()
  })

  test('snapshot match hota hai', () => {
  const { container } = render(
    <NoteCard title="Mera Note" content="Yeh content hai" />
  )
  expect(container).toMatchSnapshot()
})

})
