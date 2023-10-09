import React, { useState } from "react";

export default function ContactUs() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sparkpost", {
        body: JSON.stringify({
          email: email,
          fullName: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }

    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  return (
    <div className="bg-container">
      <div className="form-container mt-8  shadow-lg border-2 border-solid border-[#e07274] rounded-md">
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center">
          Let&apos;s Build Together
        </h1>
        <h1 className="mt-2 text-2xl md:text-3xl font-extralight tracking-tight text-gray-900 text-center">
          Contact for a free consultation
        </h1>
        <form name="contact" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder=""
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="12"
            placeholder="Leave a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="btn-form">
            {buttonText}
          </button>
        </form>
        {/* Display success or error message */}
        {showSuccessMessage && (
          <div
            class="bg-green-100 border border-green-400 text-green-500 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Sweet!</strong>
            <span class="block sm:inline">
              {" "}
              Your message has been sent successfully!
            </span>
          </div>
        )}
        {showFailureMessage && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Error: </strong>
            <span class="block sm:inline">
              {" "}
              There was an error sending your message. Please try again later.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
