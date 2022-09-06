const intern = require('../lib/intern');


const Intern = new intern('lila', '10', 'lila@gmail.com', 'texas');

test('test constructor values', () => {
    expect(Intern.name).toBe('lila');
    expect(Intern.id).toBe('10');
    expect(Intern.email).toBe('lila@gmail.com')
    expect(Intern.school).toBe('texas');
}
);

test('test name from getName method', () => {
    expect(Intern.getName()).toBe('lila')
}
);

test('test name from getId method', () => {
    expect(Intern.getId()).toBe('10')
}
);

test('test name from getEmail method', () => {
    expect(Intern.getEmail()).toBe('lila@gmail.com')
}
);

test('test github from getGithub method', () => {
    expect(Intern.getSchool()).toBe('texas')
});

test('test name from getRole method', () => {
    expect(Intern.getRole()).toBe('intern');
}
);