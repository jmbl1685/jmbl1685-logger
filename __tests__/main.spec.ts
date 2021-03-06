const logger = require('../dist/index').default({
  host: process.env.MONGODB_CONNECTION,
  logname: 'logs'
})

describe('@jmbl1685/logger [module test]', () => {
  it('Save log in Database', async () => {
    const data = await logger({
      ip: '192.168.1.66',
      status: 200,
      response: { message: 'Example Logger Succesful' }
    })

    const response = data[0].info

    expect(response.ip).toBe('192.168.1.66')
    expect(response.status).toBe(200)
    expect(typeof response.status).toBe('number')
    expect(response.response.message).toBe('Example Logger Succesful')
  })
})
