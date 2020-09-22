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
export interface IUser {
    user_location?: string;
    user_city?: string;
    user_country?: string;
    user_email?: string;
    first_name?: string;
    user_job_title?: string;
    last_name?: string;
    user_organization_name?: string;
    user_state?: string;
}

export interface IOrganization {
    organization_id?: string;
}
