import { UserBusiness } from '../src/business/UserBusiness';
import {
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
} from '../src/models/User';
import { IdGenerator } from '../src/services/IdGenerator';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { HashManagerMock } from './mocks/HashManagerMock';
import { UserDatabaseMock } from './mocks/UserDataMock';
describe('Teste do UserBusiness', () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGenerator(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test('Testando o Signup, deve retornar um token e uma mensagem', async () => {
    const input: ISignupInputDTO = {
      email: 'fulano@gmail.com',
      name: 'Fulano',
      password: '123456',
    };

    const response: ISignupOutputDTO = await userBusiness.signup(input);
    expect(response.message).toBe('Cadastro realizado com sucesso');
    expect(response.token).toBe('token-mock-normal');
  });

  test('Testando o Login, deve retornar uma mensagem e um token', async () => {
    const input: ILoginInputDTO = {
      email: 'astrodev@gmail.com',
      password: 'bananinha',
    };
    const result: ILoginOutputDTO = await userBusiness.login(input);

    expect(result.message).toBe('Login realizado com sucesso');
    expect(result.token).toBe('token-mock-admin');
  });
});
