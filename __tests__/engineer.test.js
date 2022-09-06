const engineer = require('../lib/engineer');


const Engineer = new engineer('lila', '10', 'lila@gmail.com', 'lilawilliams10');

test('test constructor values', () => {
    expect(Engineer.name).toBe('lila');
    expect(Engineer.id).toBe('10');
    expect(Engineer.email).toBe('lila@gmail.com')
    expect(Engineer.github).toBe('lilawilliams10');
}
);

test('test name from getName method', () => {
    expect(Engineer.getName()).toBe('lila')
}
);

test('test name from getId method', () => {
    expect(Engineer.getId()).toBe('10')
}
);

test('test name from getEmail method', () => {
    expect(Engineer.getEmail()).toBe('lila@gmail.com')
}
);

test('test github from getGithub method', () => {
    expect(Engineer.getGithub()).toBe('lilawilliams10')
});

test('test name from getRole method', () => {
    expect(Engineer.getRole()).toBe('engineer');
}
);