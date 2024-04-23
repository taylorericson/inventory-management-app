import React, { useState } from "react";
import "./Contact.css";
import Card from "../../components/card/Card";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../services/authService";
import axios from "axios";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass={"card"}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Contact Information</h3>
            <p>
              Fill out the form to get in contact with us or reach us through
              the channels listed below.
            </p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>070123123123</p>
              </span>
              <span>
                <FaEnvelope />
                <p>tkeaton.dev@outlook.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Chicago, Illinois</p>
              </span>
              <span>
                <FaTwitter />
                <p>@tkeaton.dev</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
