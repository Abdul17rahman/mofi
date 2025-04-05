export default function Search({ search, onSearch }) {
  return (
    <div className="mt-5 w-60">
      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <input
          type="text"
          name="username"
          value={search}
          id="username"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Search a movie"
          onChange={(e) => onSearch(e.target.value)}
          onBlur={() => onSearch("")}
        />
      </div>
    </div>
  );
}
