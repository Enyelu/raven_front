import "./MessageEmployees.scss";
const MessageEmployees = () => {
  return (
    <div className="form-floating message-employees">
      <form>
        <label className="employees">Message employees</label>
        <textarea
          className="form-control-text"
          placeholder="Write your message here"
          id="floatingTextarea"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};
export default MessageEmployees;
