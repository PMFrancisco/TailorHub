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

    static async createUser(username, password) {
        const users = await this.readUsers();
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { username, password: hashedPassword, favourites: [] };

        const exists = users.find(u => u.username === username);
        if (exists) {
            throw new Error('User already exists');
        }

        users.push(user);
        await this.writeUsers(users);

        const token = jwt.sign({ username: user.username, favourites: user.favourites }, JWT_SECRET, { expiresIn: '2h' });
        return { username, token, favourites: user.favourites };
    }

    static async findByUsername(username) {
        const users = await this.readUsers();
        return users.find(user => user.username === username);
    }

    static async validatePassword(user, password) {
        return bcrypt.compare(password, user.password);
    }

    static generateToken(user) {
        return jwt.sign({ username: user.username, favourites: user.favourites }, JWT_SECRET, { expiresIn: '2h' });
    }
}

module.exports = UserModel;
