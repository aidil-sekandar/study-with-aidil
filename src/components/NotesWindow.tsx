import NotesCard from "./NotesCard";

export default function NotesWindow({ allNotes }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {
        allNotes.map(note => {
          return (
            <NotesCard
              slug={note.data.url}
              title={note.data.title}
              subject={note.data.subject}
              description={note.data.description}
              img={note.data.img}
            />
          )
        })
      }
    </div>
  )
}