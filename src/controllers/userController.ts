import { Request, Response } from 'express';
import { findOrganizationIdWithName, findUserById } from '../DBQuery';
import {
    addOrganizationIdToMessage,
    createMessage,
    extractOrganizationId,
} from '../model/Factory';
import checkForData from '../utils/checkForData';
import { ExecuteQuery } from '../utils/dbUtil';

export const userController = {
    async show(req: Request, res: Response) {
        try {
            const userQuery = findUserById(req.params.id);

            const user = await ExecuteQuery(userQuery);
            checkForData(user, res);

            const message = createMessage(user);

            const organisationIdQuery = findOrganizationIdWithName(
                message.orgName,
            );

            const organizationId = await ExecuteQuery(organisationIdQuery);
            checkForData(organizationId, res);

            const extractedOrgId = extractOrganizationId(organizationId);

            const updatedMessage = addOrganizationIdToMessage(
                message,
                extractedOrgId,
            );

            return res
                .status(200)
                .json({ Status: 'True', response: updatedMessage });
        } catch (e) {
            return res.status(403).json({ response: e.message });
        }
    },
};
