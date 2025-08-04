import Button from "./Button.jsx";
import "./ReturnToTopButton.css";

function ReturnToTopButton() {
  function handleReturnToTop() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }
  return (
    <div className="d-flex mt-1" onClick={handleReturnToTop}>
      <Button
        large={true}
        icon="bi-chevron-double-up"
        customClasses="rounded-circle ms-auto me-3 return-top-btn"
      />
    </div>
  );
}

export default ReturnToTopButton;
