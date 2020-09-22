import { IMessage, IOrganization, IUser } from '../interfaces';

export function createMessage(str: IUser[]): IMessage {
    return {
        address: str[0]['user_location'],
        city: str[0]['user_city'],
        country: str[0]['user_country'],
        email: str[0]['user_email'],
        firstname: str[0]['first_name'],
        jobTitle: str[0]['user_job_title'],
        lastname: str[0]['last_name'],
        orgName: str[0]['user_organization_name'],
        state: str[0]['user_state'],
    };
}

export function extractOrganizationId(str: IOrganization[]): string {
    return str[0]['organization_id'];
}

export function addOrganizationIdToMessage(message: IMessage, id: string) {
    return { ...message, organization_id: id };
}
