import * as Factory from '../Factory';

describe('Factory', () => {
    let input = [
        {
            first_name: 'Joe',
            last_name: 'Dalton',
            user_city: 'Paris',
            user_country: 'France',
            user_email: 'joe@gmail.com',
            user_job_title: 'Director',
            user_location: 'somewhere',
            user_organization_name: 'Must',
            user_state: 'Ile de France',
        },
    ];
    let result = {
        address: 'somewhere',
        city: 'Paris',
        country: 'France',
        email: 'joe@gmail.com',
        firstname: 'Joe',
        jobTitle: 'Director',
        lastname: 'Dalton',
        orgName: 'Must',
        state: 'Ile de France',
    };

    test('create a message with the right props', () => {
        expect(Factory.createMessage(input)).toStrictEqual(result);
    });
});
