import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import styles from "./ModalUpload.module.css";

type ModalUpdateProps = {
  show: Function;
};

const ModalUpdate: React.FC<ModalUpdateProps> = ({ show }) => {
  const imgPreview = React.useRef<HTMLImageElement | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageChange = ({ target }: { target: HTMLInputElement }) => {
    console.log(target.files);
    if (!target.files || !imgPreview.current) return;
    const file = target.files[0];
    const fileURL = URL.createObjectURL(file);
    imgPreview.current.src = fileURL;
    console.log({ fileURL });
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
    >
      <div className={styles.modal}>
        <h3>Criar nova publicação</h3>
        <input
          type="file"
          className={styles.input}
          onChange={handleImageChange}
          onClick={(event) => console.log(event)}
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
          }`}
        >
          <Image
            width={96}
            height={96}
            src="picture-icon.svg"
            alt="Adicione suas fotos"
          />
          <p>Arraste as fotos aqui</p>
          <Button handleClick={openFileExplorer} isLoading={false}>
            Selecionar do computador
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
