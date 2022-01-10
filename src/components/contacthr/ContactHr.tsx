import "./ContactHr.scss";
const ContactHr = () => {
  return (
    <div className="form-floating message-contactHr">
      <form>
        <label className="contactHr">Message employees</label>
        <textarea
          className="form-control-text"
          placeholder="Write your message here"
          id="floatingTextarea"
        ></textarea>
        <button className="contactHr-button">Send</button>
      </form>
    </div>
  );
};
export default ContactHr;
