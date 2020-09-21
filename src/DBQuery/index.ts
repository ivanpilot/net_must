export function findUserById(id: string): string {
    return `select * from must_users where id="${id}";`;
}

export function findOrganizationIdWithName(orgName: string): string {
    return `select organization_id from must_organizations where organization_name="${orgName}";`;
}
