 type Props = {
  title: string
  content: string
}

export default function NoteCard({ title, content }: Props) {
  return (
    <div data-testid="note-card">
      <h2 data-testid="note-title">{title}</h2>
      <p data-testid="note-content">{content}</p>
    </div>
  )
}
