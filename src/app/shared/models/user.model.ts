import { UserAuthFirstParty} from './user-auth-first-party.model';

export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    password_sec: string;
    access_token: string;
    bio: string;
    status: string;
    create_time: string;
    update_time: string;

    user_auth_first_parties: Array<UserAuthFirstParty> = new Array<UserAuthFirstParty>();
}