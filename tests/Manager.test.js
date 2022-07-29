const Manager = require('../lib/Manager');

 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
