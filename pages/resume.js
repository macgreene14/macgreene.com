import resume from "../public/assets/img/resume.png";

export default function Resume() {
  return (
    <div className="bg-container bg-[url('../public/assets/img/motorcycle.png')]">
      <img
        src={resume.src}
        className="m-4 sm:m-8 overflow-x-auto w-11/12 md:w-3/4 lg:w-1/2 object-scale-down"
      />
    </div>
  );
}
