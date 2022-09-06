const manager = require('../lib/manager');


const Manager = new manager('lila', '10', 'lila@gmail.com', '123');

test('test constructor values', () => {
    expect(Manager.name).toBe('lila');
    expect(Manager.id).toBe('10');
    expect(Manager.email).toBe('lila@gmail.com')
    expect(Manager.office).toBe('123');
}
);

test('test name from getName method', () => {
    expect(Manager.getName()).toBe('lila')
}
);

test('test name from getId method', () => {
    expect(Manager.getId()).toBe('10')
}
);

test('test name from getEmail method', () => {
    expect(Manager.getEmail()).toBe('lila@gmail.com')
}
);

test('test github from getGithub method', () => {
    expect(Manager.getOffice()).toBe('123')
});

test('test name from getRole method', () => {
    expect(Manager.getRole()).toBe('manager');
}
);