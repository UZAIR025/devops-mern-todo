const request = require('supertest')
const {server, app} = require('../index')
const mongoose = require('mongoose')

describe('GET api/tasks', () =>{
    it('it should return 200 ok', async() => {
        const response = await request(app)
        .get('/api/tasks')
        expect(response.statusCode).toBe(200)
    })
    it('it should return json content type', async() => {
        const response = await request(app)
        .get('/api/tasks')
        expect( typeof response.body).toBe('object');
        expect( response.body).toHaveProperty('tasks');
    })
})

afterAll( async() => {
    await mongoose.connection.close();
    await server.close();
})