export default function ExercisesCard({ data }) {
  return (
    <a target="_blank" href={data.url} className="bg-[#262626] rounded-sm hover:bg-[#202020] py-4 px-6">
      <h2 className="text-2xl font-bold mb-3 flex gap-2 items-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor" d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05L8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828l-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607l1.415 1.415l-7.072 7.07l-1.414-1.414z" />
          </svg></span>
        <span>{data.name}</span></h2>
      <span
        className="block w-max rounded-sm py-1 px-3 bg-[#ff573179] text-white font-semibold text-sm">
        {data.subject}
      </span>
    </a>
  )
}