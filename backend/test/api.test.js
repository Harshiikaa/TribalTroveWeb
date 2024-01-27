const request = require('supertest')
const app = require('../index')

describe('API Testings', () => {
    // testing the test route '/test'
    it('GET /test | Response with valid text Hello', async () => {
        const response = await request(app).get('/test')
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('hello from express server')
    })

    // TESTING get all products routes '/api/product/getProducts'
    it('GET /api/product/getProducts | Response with valid JSON', async () => {
        // jest.setTimeout(10000);
        const response = await request(app).get('/api/product/getProducts')
        expect(response.statusCode).toBe(200)
        // expect(response.body).toBeDefined()
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe('Products fetched successfully')

    })

    // TESTING user registration route '/api/user/create'
    it('POST /api/user/create | Response with valid JSON', async () => {
        const response = await request(app).post('/api/user/create').send({
            firstName: "test",
            lastName: "test",
            email: "test@gmail.com",
            password: "test123",
        })
        //debugging error
        console.log(response.body)
        if (response.body.success) {
            expect(response.body.success).toBe(true)
            expect(response.body.message).toBe('User created succesfully.')
        } else {
            expect(response.body.success).toBe(false)
            expect(response.body.message).toBe('User already exists.')
        }

    })

    // TESTING user login route'/api/user/login'
    it('POST /api/user/login |  Response with valid JSON', async () => {
        const response = await request(app).post('/api/user/login').send({
            email: "test@gmail.com",
            password: "test123"
        })
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe('User logged in successfully')

        //token exists or not 
        expect(response.body.token).toBeDefined()

    });

    // get single product
    it('GET Product | Fetch single product', async () => {
        const response = await request(app).get('/api/product/getProduct/65a34d548f7b42183136baf6')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty("product");
    })

})