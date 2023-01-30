import resume from "../public/assets/img/resume.png";

export default function Resume() {
  const handleDownload = () => {
    fetch("../public/assets/pdf/resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MacGreeneResume2023.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="bg flex flex-col items-center  overflow-x-auto">
      <button
        onClick={handleDownload}
        className="bg-blue-200 bg-opacity-50 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Download PDF
      </button>
      <img src={resume.src} className="h-screen border-4 mb-4 min-w-min" />
    </div>
  );
}
