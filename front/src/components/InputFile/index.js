import filesize from "filesize";
import { uniqueId } from "lodash";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import {
  Container,
  Content,
  DropContainer,
  FileInfo,
  Preview,
  UploadMessage,
} from "./styles";
export default function Input({ setFile }) {
  const [uploadedFiles, setUploadedFiles] = useState({});
  function handleUpload(file) {
    file = file[0];
    const data = new FormData();
    data.append("file", file, file.name);
    setFile(data);
    file = {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: true,
      error: false,
      url: false,
    };
    setUploadedFiles(file);
  }
  function handleDelete(id) {
    setUploadedFiles({});
  }
  return (
    <Container>
      <Content>
        <Dropzone
          accept="image/*"
          onDropAccepted={(value) => {
            handleUpload(value);
          }}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} name="image" id={"image"} />
              {!isDragActive ? (
                <UploadMessage>Arraste arquivos aqui...</UploadMessage>
              ) : isDragReject ? (
                <UploadMessage type="error">
                  Arquivo não suportado
                </UploadMessage>
              ) : (
                <UploadMessage type="success">
                  Solte o arquivo aqui
                </UploadMessage>
              )}
            </DropContainer>
          )}
        </Dropzone>
        {!!uploadedFiles.id && (
          <li key={uploadedFiles.id}>
            <FileInfo>
              <Preview src={uploadedFiles.preview} />
              <div>
                <strong>{uploadedFiles.name}</strong>
                <span>
                  {uploadedFiles.readableSize}{" "}
                  {!!uploadedFiles.preview && (
                    <button
                      onClick={() => handleDelete(uploadedFiles.id)}
                      title={"Excluir imagem"}
                    >
                      Excluir
                    </button>
                  )}
                </span>
              </div>
            </FileInfo>
            <div>
              {uploadedFiles.preview && (
                <a
                  title={"Prévia da imagem"}
                  href={uploadedFiles.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                </a>
              )}
              {uploadedFiles.uploaded && (
                <MdCheckCircle size={24} color="#78e5d5" />
              )}
              {uploadedFiles.error && <MdError size={24} color="#e57878" />}
            </div>
          </li>
        )}
      </Content>
    </Container>
  );
}
