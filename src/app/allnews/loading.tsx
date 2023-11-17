export default function Loading() {
  return (
    <div className="flex flex-col w-1/2 ">
      {[...new Array(7)].map((p, index) => (
        <article key={index} className="skeleton-card">
          <div className="skeleton w-full h-[280px] rounded"></div>
          <div className="py-5">
            <h2 className="skeleton mt-4 h-4  w-3/5 "></h2>
          </div>
          <div className="flex space-x-4 pb-5">
            <div className="skeleton  w-20 h-4 rounded-md px-2 py-1 shadow-md"></div>
            <div className="skeleton w-20 h-4 rounded-md px-2 py-1 shadow-md"></div>
            <div className="skeleton w-20 h-4 rounded-md px-2 py-1 shadow-md"></div>
          </div>

          <div className="pb-5">
            <p className="skeleton w-full h-3 mb-3"></p>
            <p className="skeleton w-full h-3"></p>
          </div>
        </article> 
      ))}
    </div>
  );
}
