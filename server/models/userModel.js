const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const filePath = path.join(__dirname, '..', 'database', 'users.json');

class UserModel {
    static async readUsers() {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async writeUsers(data) {
        try {
            await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        } catch (err) {
            console.error(err);
        }
    }

    static async createUser(username, email, password) {
        const users = await this.readUsers();
        const hashedPassword = await bcrypt.hash(password, 10);

        if (users.some(u => u.username === username || u.email === email)) {
            throw new Error('Username or email already exists');
        }

        const user = { username, email, password: hashedPassword, favourites: [] };
        users.push(user);
        await this.writeUsers(users);
        return this.generateToken(user);
    }

    static async findByUsername(username) {
        const users = await this.readUsers();
        return users.find(user => user.username === username);
    }

    static async validatePassword(user, password) {
        return bcrypt.compare(password, user.password);
    }

    static generateToken(user) {
        return jwt.sign({ username: user.username, email: user.email, favourites: user.favourites }, JWT_SECRET, { expiresIn: '2h' });
    }
}

module.exports = UserModel;
