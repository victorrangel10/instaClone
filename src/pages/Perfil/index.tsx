import React, { useEffect, useState } from 'react';
import {
  PerfilContainer,
  ProfileHeader,
  ProfileAvatar,
  DescriptionContainer,
  PostsGrid
} from './styles'

// Importe aqui o componente Post, que você já tem
import { Post } from '../../components/Post'
import { TitleBar } from '../../components/TitleBar'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../../api/get-profile'
import { getUserPosts, UserPost } from '../../api/get-user-posts';

export function Perfil() {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  const { data: profile1 } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  const profile = profile1?.user;

  console.log('Perfil ofc:', profile);
  useEffect(() => {
    async function fetchUserPosts() {
      if (profile?.id) {
      // Verifique se o ID está correto
        try {
          console.log('ID do perfil:', profile.id); 
          const posts = await getUserPosts(profile.id);
          setUserPosts(posts);
          console.log('Posts do usuário:', posts);  
        } catch (error) {
          console.error('Erro ao buscar os posts do usuário:', error);
        }
      }
    }

    fetchUserPosts();
  }, [profile]);



  return (
    <div>
      <TitleBar text="Meu perfil" />
      <PerfilContainer>
        <ProfileHeader>
          <ProfileAvatar
            src={`http://localhost:3333/${profile?.profileImage}`}
            alt={'${profile.name}'}
          />
          <DescriptionContainer>
            <h2>{profile?.name}</h2>
            <p>bio do instagram bla bla bla </p>
          </DescriptionContainer>
        </ProfileHeader>

        {/* Grade de posts */}
        <PostsGrid>
          {userPosts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              profileName={profile?.name || 'Usuário'}
              avatarUrl={`http://localhost:3333/${profile?.profileImage}`}
              date={new Date(post.date).toLocaleDateString()}
              imageUrl={`http://localhost:3333/${post.postImage}`}
              description={post.description || 'Sem descrição'}
            />
          ))}
        </PostsGrid>
      </PerfilContainer>
    </div>
  )
}


