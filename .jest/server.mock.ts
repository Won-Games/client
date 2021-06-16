import 'setimmediate'
global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // ficar escutando todas as chamadas nos testes
  server.listen()
})

afterEach(() => {
  // reseta todos os handlers para caso eles sejam chamados
  // novament
  server.resetHandlers()
})

afterAll(() => {
  // fecha o server e limpa os testes
  server.close()
})
