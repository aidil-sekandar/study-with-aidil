import NotesCard from "./NotesCard";

export default function NotesWindow({ allNotes }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {
        allNotes.map(note => {
          return (
            <NotesCard
              key={note.data.url}
              subjectURL={note.data.subjectURL}
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