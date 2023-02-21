import React from "react";
import styles from "./ModalUpdate.module.css";

type ModalUpdateProps = {
  show: Function;
};

const ModalUpdate: React.FC<ModalUpdateProps> = ({ show }) => {
  const imgPreview = React.useRef<HTMLImageElement | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleImageChange = ({ target }: { target: HTMLInputElement }) => {
    if (!target.files || !imgPreview.current) return;
    const file = target.files[0];
    const fileURL = URL.createObjectURL(file);
    imgPreview.current.src = fileURL;
    setSelectedFile(file);
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

  const uploadImage = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile, selectedFile.name);
      const data = await fetch("/api/upload-image", {
        method: "POST",
        // headers: {
        //   "Content-Type": " multipart/form-data",
        // },
        body: formData,
      });
      console.log(data);
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
        <button onClick={uploadImage}>Enviar</button>
      </div>
    </div>
  );
};

export default ModalUpdate;
