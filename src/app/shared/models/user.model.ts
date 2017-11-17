import { UserAuthFirstParties} from './user-auth-first-parties.model';

export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    access_token: string;
    bio: string;
    status: string;
    create_time: string;
    update_time: string;

    user_auth_first_parties: UserAuthFirstParties = new UserAuthFirstParties();
}