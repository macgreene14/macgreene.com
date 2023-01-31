export default function Contact() {
  return (
    <div className="bg-container bg-[url('../public/assets/img/motorcycle.png')]">
      <div className="form-container mt-24">
        <h3 className="font-bold">Let&apos;s Build Together</h3>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />

          {/* --- */}
          <input
            type="email"
            name="email"
            id="email"
            className="opacity-0 fixed top-0 left-0 w-0 h-0"
            placeholder=""
          />
          {/* --- */}
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder=""
            required
          />
          <label>Name</label>
          <input type="text" name="name" id="name" placeholder="" required />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder=""
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="12"
            placeholder="Leave a comment..."
          />
          <button type="submit" className="btn-form">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
