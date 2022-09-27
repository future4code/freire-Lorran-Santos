import { PostBusiness } from '../src/business/PostBusiness';
import {
  IAddLikeInputDTO,
  IAddLikeOutputDTO,
  ICreatePostInputDTO,
  ICreatePostOutputDTO,
  IDeletePostInputDTO,
  IDeletePostOutputDTO,
  IGetPostsInputDTO,
  IGetPostsOutputDTO,
  IRemoveLikeInputDTO,
  IRemoveLikeOutputDTO,
  Post,
} from '../src/models/Post';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { IdGeneratorMock } from './mocks/IdGeneretorMock';
import { PostDatabaseMock } from './mocks/PostdataBaseMock';
describe('Testes referente ao PostBusiness', () => {
  const postBusiness = new PostBusiness(
    new PostDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test('Testando createPost, uma instancia de Post', async () => {
    const input: ICreatePostInputDTO = {
      token: 'token-mock-normal',
      content: 'Teste do mock',
    };

    const result = await postBusiness.createPost(input);

    expect(result.message).toBe('Post criado com sucesso');
    expect(result.post).toBeInstanceOf(Post);
    expect(result.post.getId()).toBe('id-mock');
    expect(result.post.getContent()).toBe('Teste do mock');
    expect(result.post.getLikes()).toBe(0);
    expect(result.post.getUserId()).toBe('id-mock');
  });

  test('testando o getPosts, deve retornar um array de posts', async () => {
    const input: IGetPostsInputDTO = {
      token: 'token-mock-normal',
    };
    const result: IGetPostsOutputDTO = await postBusiness.getPosts(input);
    expect(result.posts.length).toBe(3);
    expect(result.posts[0]).toBeInstanceOf(Post);
  });

  test('testando o deletePost, deve retornar uma mensagem', async () => {
    const input: IDeletePostInputDTO = {
      token: 'token-mock-admin',
      postId: '201',
    };

    const result: IDeletePostOutputDTO = await postBusiness.deletePost(input);
    expect(result.message).toBe('Post deletado com sucesso');
  });

  test('Testando o addLike, deve retornar uma mensagem', async () => {
    const input: IAddLikeInputDTO = {
      token: 'token-mock-admin',
      postId: '202',
    };

    const result: IAddLikeOutputDTO = await postBusiness.addLike(input);
    expect(result.message).toBe('Like realizado com sucesso');
  });

  test('Testando o removeLike, deve retornar uma mensagem', async () => {
    const input: IRemoveLikeInputDTO = {
      token: 'token-mock-admin',
      postId: '201',
    };

    const result: IRemoveLikeOutputDTO = await postBusiness.removeLike(input);
    expect(result.message).toBe('Like removido com sucesso');
  });
});
