import Button from "./Button.jsx";
import "./ReturnToTopButton.css";

function ReturnToTopButton() {
  function handleReturnToTop() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="d-flex mt-1" onClick={handleReturnToTop}>
      <Button
        large={true}
        icon="bi-chevron-double-up"
        customClasses="rounded-circle return-top-btn"
      />
    </div>
  );
}

export default ReturnToTopButton;
