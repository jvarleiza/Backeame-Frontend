export class User {
    constructor(
        public id?: number,
        public name?: string,
        public lastName?: string,
        public username?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public newPassword?: string,
        public location?: string,
        public joined?: string,
        public backedProjects?: string,
        public biography?: string
    ) {  }
}
