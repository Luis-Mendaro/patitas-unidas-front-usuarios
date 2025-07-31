import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-100 bg-black d-flex align-items-center justify-content-end px-3" style={{ height: "50px" }}>
      <Link to="/adopcion" className="btn btn-primary">
        Adoptar
      </Link>
    </div>
  );
}

export default Navbar;