const Engineer = require('../lib/Engineer');

test("Should create a new Engineer") , () =>{
    const engineer = new Engineer('Omar', 5, 'omar@something.com', 'Omar_S');
    expect(engineer.name).toEqual('Omar')
}
