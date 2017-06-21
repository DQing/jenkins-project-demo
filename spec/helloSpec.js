const server = require('../server');
const request = require('supertest');

describe('get /hello', ()=> {
    it('should return hello string', (done)=> {
        request(server)
            .get('/hello')
            .end((err, res)=> {
                if (err) {
                    done.fail(err);
                } else {
                    let temp = res.text;
                    let expectResult = "helloWorld";
                    expect(temp).toEqual(expectResult);
                    done();
                }
            })
    })
});