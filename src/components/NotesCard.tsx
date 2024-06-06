import { subjectURL } from "@/lib/utils/basicUtils";

export default function NotesCard({ slug, title, subject, img }) {
  return (
    <a href={`/${subjectURL(subject)}/notes/${slug}`} className="relative bg-[#262626] rounded-sm hover:bg-[#202020]">
      <span
        className="absolute right-2 top-2 block w-max rounded-sm py-1 px-3 bg-[#ff5731] text-white font-semibold text-sm"
      >{subject}</span
      >
      <div className="max-h-[200px] overflow-hidden rounded-t-sm">
        <img loading="lazy" src={img} alt="Note's Featured" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </a>
  )
}
