import React from "react";
import styles from "./Modal-Create.module.css";

type ModalCreateProps = {
  show: Function;
};

const ModalCreate: React.FC<ModalCreateProps> = ({ show }) => {
  const imgPreview = React.useRef<HTMLImageElement | null>(null);

  const handleImageChange = ({ target }: { target: HTMLInputElement }) => {
    if (!target.files || !imgPreview.current) return;
    const file = target.files[0];
    const fileURL = URL.createObjectURL(file);
    imgPreview.current.src = fileURL;
  };

  const exitModal = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target;
    if (
      target instanceof HTMLDivElement &&
      target.id === "modal-container-bg"
    ) {
      show();
    }
  };

  return (
    <div
      id="modal-container-bg"
      className={styles.container}
      onClick={exitModal}
    >
      <div className={styles.modal}>
        <h2>Envie sua foto</h2>
        <input type="file" onChange={handleImageChange} />
        <div className={styles.preview}>
          <img ref={imgPreview} />
        </div>
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default ModalCreate;
