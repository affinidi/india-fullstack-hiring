export const signup = (username, password) => {
    if(!username || !password) {
        throw new Error('Username or Password required');
    }

    if(localStorage.getItem(username)) {
        throw new Error('Username already exists!')
    }

    if(password.length < 8) {
        throw new Error('Password should have alteast 8 characters.')
    }

    const pattern =  /^[A-Za-z]\w{7,14}$/
    if(pattern.test(password)) {
        throw new Error('Password must contain alphanumeric characters.');
    }

    localStorage.setItem(username, btoa(password));

    return {
        success: true,
        msg: 'User created successfully!'
    }
}

export const signin = (username, password) => {
    if(!username || !password) {
        throw new Error('Username or Password required');
    }

    const storedPassword = localStorage.getItem(username);

    if(!storedPassword) {
        throw new Error('Username does not exists!')
    }

    if(storedPassword !== btoa(password)) {
        throw new Error('Invalid credentials!');
    }

    return {
        success: true,
        msg: 'Login successful!'
    }
}