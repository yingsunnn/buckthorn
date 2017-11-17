export class UserAuthFirstParties {
    secure_password: string;
    user_identity: string;
    auth_name: string = USER_AUTH_NAME.EMAIL;
}

export const USER_AUTH_NAME = {
    "EMAIL": "EMAIL"
}