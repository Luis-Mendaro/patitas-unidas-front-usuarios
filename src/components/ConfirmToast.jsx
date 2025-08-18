import { toast } from "react-toastify";

function ConfirmToast({
  onConfirm,
  onCancel,
  text = "¿Deseas seguir adelante?",
  toastEffect,
}) {
  return (
    <div>
      <p>{text}</p>
      <div>
        <button
          onClick={() => {
            onConfirm();
            toast.dismiss();
          }}
          className="btn btn-sm btn-danger me-2"
        >
          Confirmar
        </button>
        <button
          onClick={() => {
            onCancel();
            toast.dismiss();
          }}
          className="btn btn-sm btn-outline-dark"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ConfirmToast;
