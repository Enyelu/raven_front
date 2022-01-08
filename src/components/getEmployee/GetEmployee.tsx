import "./GetEmployee.scss";
const GetEmployee = () => {
  return (
    <div className="get-employee">
      <h4 className="password-header">Get Employee</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control form-control-em"
          placeholder="Search by Email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default GetEmployee;
