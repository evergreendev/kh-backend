import {v4 as uuidv4} from 'uuid';
import {BeforeChangeHook} from "payload/dist/collections/config/types";

function generatePayloadID() {
    const id = uuidv4().replaceAll("-", "");

    return id.substring(0, 24);
}

function recurseField(field: any, shouldGenerateId:boolean,seenIds) {
    if (!(typeof field === 'object' && !Array.isArray(field) && field !== null) && !Array.isArray(field)) {
        if(!shouldGenerateId){
            return field;
        }
        if (seenIds.has(field)){
            const newId = generatePayloadID();
            seenIds.add(newId);
            return newId;
        }
        seenIds.add(field);
        return field;
    }
    if (typeof field === 'object' && !Array.isArray(field) && field !== null) {
        const objectToReturn = {}
        for (const property in field) {
            objectToReturn[property] = recurseField(field[property], property === "id",seenIds);
        }

        return objectToReturn;
    }
    if (Array.isArray(field)) {
        return field?.map(item => {
            return recurseField(item, false,seenIds);
        });
    }

}

export const fixDuplicationCollectionHook: BeforeChangeHook = ({data}) => {
    const seenIds = new Set();
    return recurseField(data,false,seenIds);
}
