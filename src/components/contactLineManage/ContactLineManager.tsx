import "./ContactLineManager.scss";
const ContactLineManager = () => {
  return (
    <div className="form-floating message-contactLn">
      <form>
        <label className="contactLn">Message employees</label>
        <textarea
          className="form-control-text"
          placeholder="Write your message here"
          id="floatingTextarea"
        ></textarea>
        <button className="contactLn-button">Send</button>
      </form>
    </div>
  );
};
export default ContactLineManager;
