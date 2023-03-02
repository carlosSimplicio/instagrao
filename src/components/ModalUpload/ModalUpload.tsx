import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import styles from "./ModalUpload.module.css";

type ModalUpdateProps = {
  show: Function;
};

const ModalUpdate: React.FC<ModalUpdateProps> = ({ show }) => {
  const imgPreview = React.useRef<HTMLImageElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleImageChange = ({ target }: { target: HTMLInputElement }) => {
    if (!target.files || !imgPreview.current) return;
    const file = target.files[0];
    const fileURL = URL.createObjectURL(file);
    imgPreview.current.src = fileURL;
    setSelectedFile(file);
  };

  const handleDropImage = (event: React.DragEvent) => {
    event.preventDefault();
    if (!event.dataTransfer.files.length || !imgPreview.current) return;

    const file = event.dataTransfer.files[0];
    if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      const fileURL = URL.createObjectURL(file);
      imgPreview.current.src = fileURL;
      setSelectedFile(file);
    }
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
        body: formData,
      });
      setSelectedFile(null);
      show();
    }
  };

  const openFileExplorer = () => {
    inputRef.current?.click();
  };

  const showPreview = !!selectedFile;

  return (
    <div
      id="modal-container-bg"
      className={styles.container}
      onClick={exitModal}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setIsDragging(false);
      }}
      onDrop={handleDropImage}
    >
      <div className={styles.closeButton}>
        <button onClick={() => show()} title="Fechar">
          ✖
        </button>
      </div>
      <div className={styles.modal}>
        <div className={styles.actions}>
          <h3>Criar nova publicação</h3>
          <button disabled={!selectedFile} onClick={uploadImage}>
            Upload
          </button>
        </div>
        <input
          type="file"
          className={styles.input}
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageChange}
          ref={inputRef}
        />
        <div
          className={`${styles.preview} ${
            showPreview ? styles.showPreview : ""
          }`}
        >
          <img ref={imgPreview} />
        </div>
        <div
          className={`${styles.dropdown} ${
            showPreview ? styles.showPreview : ""
          } ${isDragging ? styles.drag : ""}`}
        >
          <Image
            width={96}
            height={96}
            src="picture-icon.svg"
            alt="Adicione sua foto"
          />
          <p>Arraste a foto aqui</p>
          <Button handleClick={openFileExplorer} isLoading={false}>
            Selecionar do computador
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
