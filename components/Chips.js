export default function Chips({ chips = [] }) {
  return (
    <ul className="flex flex-wrap">
      {chips.map(chip => (
        <li className="mr-1 mb-3 text-xs bg-gray-300 text-gray-800 rounded-full px-4 py-1">
          {chip}
        </li>
      ))}
    </ul>
  );
}
