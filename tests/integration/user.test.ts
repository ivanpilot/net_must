import { IUser } from '../../src/interfaces';
// import {User} from '../../src/model/User'

describe('When persisting a new user record', () => {
    let joe: IUser;

    beforeEach(() => {
        joe = {
            first_name: 'Joe',
            last_name: 'Dalton',
            user_city: 'Paris',
            user_country: 'France',
            user_email: 'joe@gmail.com',
            user_job_title: 'Director',
            user_location: 'somewhere',
            user_organization_name: 'Must',
            user_state: 'Ile de France',
        };
    });

    describe('A user can be created, read, updated and deleted', () => {
        let user: IUser;
        beforeEach(async () => {
            // on persiste un user dans la bdd
            user = new User(joe);
            await user.save();
        });

        test('it creates a new user', () => {
            //on verifie que le user existe
            // différentes facon selon l'ORM que l'on utilise
            expect(user.isNew).toBeFalsy();
        });

        test('it finds a newly saved user', async () => {
            // on fait une requete async pour vérifier
            // exemple ci dessous presuppose que l'on ait un User Model
            const users: IUser[] = await User.find({
                email: 'joe@gmail.com',
            });
            expect(users.length).toBe(1);
        });

        // on vérifie de même pour udpater et deleted
    });
});
