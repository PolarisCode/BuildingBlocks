var request =  require('supertest');
var app = require('./app');

describe('Request to the root  path', function(){
    it('Returns a 200 status code', function(done){
        request(app)
            .get('/')
            .expect(200)
            .end(function(err){
                if(err) throw err;
                done();
            });
    });
});

describe('Listing cities in /cities', function(){
   it('Returns a 200 status code', function(done){
       request(app)
           .get('/cities')
           .expect(200, done);
   }) ;

    it('Returns JSON format', function(done){
        request(app)
            .get('/cities')
            .expect('Content-Type',/json/, done);
    });

    it('Returns initial cities', function(done){
            request(app)
                .get('/cities')
                .expect(JSON.stringify(['Lotopia', 'Caspiana','Indigo']), done);
    });
});

