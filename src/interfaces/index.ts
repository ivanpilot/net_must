export interface IKeys {
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
}

export interface IMessage {
    address: string;
    city: string;
    country: string;
    email: string;
    firstname: string;
    jobTitle: string;
    lastname: string;
    orgName: string;
    state: string;
    organization_id?: null | string;
}
