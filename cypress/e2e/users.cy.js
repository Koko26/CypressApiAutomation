describe('Testing users API', () => {
  it('GET API Request with -- Valid 200 Response', () => {
    const options = {
      method: 'GET',
      url: '/users/2'
    };
      
    cy.request(options).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('GET Request - Verify User detils', () => {
    const options = {
      method: 'GET',
      url: '/users/2'
    };
      
    cy.request(options).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.id).to.eq(2)
      expect(response.body.data.first_name).to.eq('Janet')
      expect(response.body.data.last_name).to.eq('Weaver')
    })
  })

  it('POST API Request with -- Valid 201 Response', () => {
    const options = {
      method: 'POST',
      url: '/users/2',
      body: {
        id: 123
      }
    };
      
    cy.request(options).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.eq(123)
    })
  })

  it('PUT API Request with -- Valid 200 Response', () => {
    const options = {
      method: 'PUT',
      url: '/users/2',
      body: {
        id: 245
      }
    };
      
    cy.request(options).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.eq(245)
    })
  })

  it('DELETE API Request with -- Valid 204 Response ', () => {
    const options = {
      method: 'DELETE',
      url: '/users/2'
    };
      
    cy.request(options).then((response) => {
      expect(response.status).to.eq(204)
    })
  })



})