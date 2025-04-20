
import {
    PostContainer,
    PostHeader,
    PostAvatar,
    PostUserInfo,
    PostDate,
    PostImage,
    PostFooter
} from './styles'

/**
 * Exemplo de uso:
 * <Post
 *   profileName="profile_name"
 *   avatarUrl="caminho/para/avatar.jpg"
 *   date="23/11/2024"
 *   imageUrl="caminho/para/foto-do-post.jpg"
 *   description="Lorem ipsum dolor sit amet..."
 * />
 */
export function Post({ profileName, avatarUrl, date, imageUrl, description }) {
    return (
        <PostContainer>
            {/* Header */}
            <PostHeader>
                <PostAvatar src={avatarUrl} alt="Foto de Perfil" />
                <PostUserInfo>
                    <span>@{profileName}</span>
                </PostUserInfo>
                <PostDate>{date}</PostDate>
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
        </PostContainer>
    )
}
