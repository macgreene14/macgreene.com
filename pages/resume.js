export default function Resume() {
  const resumeSrc = "https://ik.imagekit.io/bamlnhgnz/Resume2023.png";
  return (
    <div className="bg-container bg-[url('../public/assets/img/motorcycle.png')]">
      <img
        src={resumeSrc}
        className="m-4 sm:m-8 overflow-x-auto w-11/12 md:w-3/4 lg:w-1/2 object-scale-down"
      />
    </div>
  );
}
