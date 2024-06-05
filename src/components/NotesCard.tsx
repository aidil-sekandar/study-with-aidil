import { subjectURL } from "@/lib/utils/basicUtils";

export default function NotesCard({ slug, title, subject, description, img }) {
  return (
    <a href={`/${subjectURL(subject)}/notes/${slug}`} className="relative bg-[#262626] rounded-sm hover:bg-[#202020]">
      <span
        className="absolute right-2 top-2 block w-max rounded-sm py-1 px-3 bg-[#ff5731] text-white font-semibold text-sm"
      >{subject}</span
      >
      <div className="h-[158px] overflow-hidden rounded-t-sm">
        <img loading="lazy" src={img} alt="Note's Featured Image" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-textSecondary [word-spacing:1px]">
          {description}
        </p>
      </div>
    </a>
  )
}
