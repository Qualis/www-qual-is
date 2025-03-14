export function Intro() {
  return (
    <div>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          qual.is
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Software Development & Delivery Musings by Sean (SVO) Van Osselaer.
        </h4>
      </section>
      <hr className="border-t border-gray-300 dark:border-gray-700 w-full mb-12" />
    </div>
  );
}
