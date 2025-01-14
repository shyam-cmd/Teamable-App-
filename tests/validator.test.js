const {isEmptyPayload, isInvalidEmail} = require ('../validator')

test ('valid-email', function () {
    testPayload = {
        name: 'test',
        email: 'shyam@shyam',
        interests: 'shyam'
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test ('invalid-email', function () {
    testPayload = {
        name: 'test',
        email: 'shyam',
        interests: 'shyam'
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test ('empty-payload', function(){
    testPayload = { }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test ('non-empty-payload', function(){
    testPayload = {
       name: 'test',
        email: 'shyam',
        interests: 'shyam'
    }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)
})