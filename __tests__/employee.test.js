const Employee = require('../lib/employee');

const employee = new Employee('lila', '10', 'lila@gmail.com');

test('test constructor values', () => {
    expect(employee.name).toBe('lila');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('lila@gmail.com');
}
);

test('test name from getName method', () => {
    expect(employee.getName()).toBe('lila')
}
);

test('test name from getId method', () => {
    expect(employee.getId()).toBe('10')
}
);

test('test name from getEmail method', () => {
    expect(employee.getEmail()).toBe('lila@gmail.com')
}
);

test('test name from getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
}
);