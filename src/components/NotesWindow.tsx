import NotesCard from "./NotesCard";

export default function NotesWindow({ allNotes }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {
        allNotes.map(note => {
          return (
            <NotesCard
              slug={note.data.url}
              title={note.data.title}
              subject={note.data.subject}
              img={note.data.img}
            />
          )
        })
      }
    </div>
  )
}