 import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NoteForm from '../NoteForm'

describe('NoteForm Component', () => {

  test('form render hota hai', () => {
    const mockSubmit = jest.fn()
    render(<NoteForm onSubmit={mockSubmit} />)

    expect(screen.getByTestId('note-form')).toBeInTheDocument()
    expect(screen.getByTestId('title-input')).toBeInTheDocument()
    expect(screen.getByTestId('content-input')).toBeInTheDocument()
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument()
  })

  test('user type kare toh input update hota hai', async () => {
    const mockSubmit = jest.fn()
    render(<NoteForm onSubmit={mockSubmit} />)

    const titleInput = screen.getByTestId('title-input')
    await userEvent.type(titleInput, 'Mera Note')

    expect(titleInput).toHaveValue('Mera Note')
  })

  test('submit karne pe onSubmit call hota hai', async () => {
    const mockSubmit = jest.fn()
    render(<NoteForm onSubmit={mockSubmit} />)

    await userEvent.type(screen.getByTestId('title-input'), 'Test Title')
    await userEvent.type(screen.getByTestId('content-input'), 'Test Content')
    await userEvent.click(screen.getByTestId('submit-btn'))

    expect(mockSubmit).toHaveBeenCalledWith('Test Title', 'Test Content')
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })

})
