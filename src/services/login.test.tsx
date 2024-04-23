import { login } from "./login"

describe('login', () => {

    const mockEmail = 'lindomar@dio.bank'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso o email e password sejam válidos', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email ou password sejam inválidos', async() => {
        const response = await login('email@invalido.com', '111111')
        expect(response).toBeFalsy()
    })
})