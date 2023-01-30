import resume from "../public/assets/img/resume.png";

export default function Resume() {
  const handleDownload = () => {
    resume.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "MacGreeneResume2023.pdf";
      alink.click();
    });
  };
  return (
    <div className="bg flex flex-col items-center">
      <button
        onClick={handleDownload}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Download PDF
      </button>
      <img src={resume.src} className="w-screen" />
    </div>
  );
}
