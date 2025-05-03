import React, { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { TitleBar } from "../../components/TitleBar";
import { getPosts, Post as PostType } from "../../api/get-posts";
import { getUserById, User } from "../../api/get-user-by-id";

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [userProfiles, setUserProfiles] = useState<Record<string, User>>({});

  useEffect(() => {
    async function fetchPostsAndUsers() {
      try {
        const postsData = await getPosts();
        setPosts(postsData);

        const userIds = [...new Set(postsData.map((post) => post.USER_ID))];
        const profiles: Record<string, User> = {};

        for (const userId of userIds) {
          const userProfile = await getUserById(userId);
          profiles[userId] = userProfile.user;
        }

        setUserProfiles(profiles);
      } catch (error) {
        console.error("Erro ao buscar os posts ou perfis dos usuários:", error);
      }
    }

    fetchPostsAndUsers();
  }, []);

  return (
    <div>
      <TitleBar text="Últimas fotos" />
      {posts.map((post) => {
        const userProfile = userProfiles[post.USER_ID];
        console.log(userProfile);
        return (
          <Post
            key={post.id}
            profileName={userProfile?.name || "Usuário desconhecido"}
            avatarUrl={`http://localhost:3333/${userProfile?.profileImage}`}
            date={new Date(post.date).toLocaleDateString()}
            imageUrl={`http://localhost:3333/${post.postImage}`}
            description={post.description || "Sem descrição"}
          />
        );
      })}
    </div>
  );
}