import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  PostAvatar,
  PostUserInfo,
  PostDate,
  PostImage,
  PostFooter,
  EllipsisMenu,
  TrashIcon,
} from "./styles";
import { updatePost } from "../../api/update-post";
import { deletePost } from "../../api/delete-post";

export function Post({ postId, profileName, avatarUrl, date, imageUrl, description }) {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar o pop-up
  const [newDescription, setNewDescription] = useState(description); // Estado para a nova descrição

  function handleMenuClick() {
    setIsEditing(true); // Abre o pop-up
  }

  function handleClose() {
    setIsEditing(false); // Fecha o pop-up
  }

  async function handleSave() {
    try {
      await updatePost({ id: postId, description: newDescription });
      console.log("Descrição atualizada com sucesso!");
      setIsEditing(false); // Fecha o pop-up após salvar
    } catch (error) {
      console.error("Erro ao atualizar a descrição:", error);
      alert("Não foi possível atualizar a descrição.");
    }
  }

  async function handleDelete() {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");
    if (!confirmDelete) return;

    try {
      await deletePost(postId); // Usa o postId recebido como prop
      alert("Post excluído com sucesso!");
      // Aqui você pode adicionar lógica para atualizar a lista de posts no componente pai
    } catch (error) {
      console.error("Erro ao excluir o post:", error);
      alert("Não foi possível excluir o post.");
    }
  }

  return (
    <PostContainer>
      {/* Header */}
      <PostHeader>
        <PostAvatar src={avatarUrl} alt="Foto de Perfil" />
        <PostUserInfo>
          <span>@{profileName}</span>
        </PostUserInfo>
        <PostDate>{date}</PostDate>
        <EllipsisMenu onClick={handleMenuClick}>⋮</EllipsisMenu>
        <TrashIcon onClick={handleDelete}>🗑️</TrashIcon>
      </PostHeader>

      {/* Imagem / Placeholder */}
      <PostImage>
        {imageUrl ? (
          <img src={imageUrl} alt="Foto do Post" />
        ) : (
          <div className="placeholder">Foto</div>
        )}
      </PostImage>

      {/* Rodapé */}
      <PostFooter>
        <strong>@{profileName}</strong> {description}
      </PostFooter>

      {/* Pop-up de edição */}
      {isEditing && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <h2 style={{ color: "#FF751F", marginBottom: "1rem" }}>Editar Foto</h2>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Nova Descrição
          </label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            style={{
              width: "100%",
              height: "100px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={handleSave}
            style={{
              backgroundColor: "#FF751F",
              color: "#fff",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginRight: "1rem",
            }}
          >
            Salvar
          </button>
          <button
            onClick={handleClose}
            style={{
              backgroundColor: "#ccc",
              color: "#333",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </div>
      )}
    </PostContainer>
  );
}
