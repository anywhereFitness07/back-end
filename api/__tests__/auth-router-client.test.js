const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

describe('GET /clients', () => {
    test(`returns a status 200 ok`, async () => {
        const res = await request(server).get('/api/auth/clients')
        expect(res.status).toBe(200)
    })
})

describe('POST /instructors/login', () => {
    test('returns a 401 error', async () => {
        const res = await request(server)
            .post('/api/auth/instructors/register')
            .send({
                instructor_name: 'Trey',
                password: '1234'

            })
        expect(res.status).toBe(201)

    })
})












































