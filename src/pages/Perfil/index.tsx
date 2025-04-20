import React from 'react'
import {
  PerfilContainer,
  ProfileHeader,
  ProfileAvatar,
  DescriptionContainer,
  PostsGrid
} from './styles'

// Importe aqui o componente Post, que você já tem
import {Post} from '../../components/Post'
import { TitleBar } from '../../components/TitleBar'
export function Perfil() {
  // Exemplo: simulando 9 posts de placeholders
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    profileName: 'profile_name',
    avatarUrl: '',     // Se quiser exibir um avatar no próprio Post
    date: '23/11/2024',
    imageUrl: '',      // Se vazio, o Post mostrará o placeholder "Foto"
    description: 'Lorem ipsum dolor sit amet.'
  }))

  return (
    <div>
    <TitleBar text="Meu perfil" />
    <PerfilContainer>
      <ProfileHeader>
        <ProfileAvatar
          src="https://via.placeholder.com/120x120.png?text=Perfil" 
          alt="Foto de Perfil"
        />
        <DescriptionContainer>
          <h2>Foto de Perfil</h2>
          <p>Descrição (max: 180 caracteres)</p>
          <p>OBS: Desconsiderar borda</p>
        </DescriptionContainer>
      </ProfileHeader>

      {/* Grade de posts */}
      <PostsGrid>
        {posts.map(post => (
          <Post
            key={post.id}
            profileName={post.profileName}
            avatarUrl={post.avatarUrl}
            date={post.date}
            imageUrl={post.imageUrl}
            description={post.description}
          />
        ))}
      </PostsGrid>
    </PerfilContainer>
    </div>
  )
}


