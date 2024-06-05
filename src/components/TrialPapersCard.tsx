export default function TrialPapersCard({ data }) {
  return (
    <a target="_blank" href={data.url} className="bg-[#262626] rounded-sm hover:bg-[#202020] py-4 px-6">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <span
        className="block w-max rounded-sm py-1 px-3 bg-[#ff573179] text-white font-semibold text-sm">
        {data.subject}
      </span>
    </a>
  )
}