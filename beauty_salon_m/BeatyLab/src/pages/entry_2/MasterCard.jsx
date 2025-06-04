/**
 * @typedef {Object} MasterCardProps
 * @property {string} name - Master's full name
 * @property {string} role - Master's role/position
 * @property {string} availability - Nearest available dates
 */

/**
 * Individual master card component displaying master's information
 * @param {MasterCardProps} props
 */
export function MasterCard({ name, role, availability }) {
  return (
    <article className="flex justify-between items-center w-full">
      <div className="flex gap-8 items-center">
        <div className="overflow-hidden rounded-full border border-solid border-neutral-400 h-[83px] w-[83px]">
          <img
            src="https://placehold.co/83x83/4C4C4C/4C4C4C"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-3xl font-light text-neutral-600">{name}</h3>
          <p className="text-xl font-light text-neutral-600">{role}</p>
          <p className="text-base text-neutral-600">
            Ближайшая запись: {availability}
          </p>
        </div>
      </div>
      <button className="focus:outline-none" aria-label="Select master">
        <ForwardArrowIcon />
      </button>
    </article>
  );
}
