import {v4 as uuidv4} from 'uuid';
import {FieldHook} from "payload/types";

function generatePayloadID() {
    const id = uuidv4().replaceAll("-", "");

    return id.substring(0, 24);
}

function recurseField(field: any, shouldGenerateId:boolean,seenIds) {
    if(field instanceof Date){
        return field;
    }
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

export const fixDuplicationHook: FieldHook = ({value}) => {
    const seenIds = new Set();
    return recurseField(value,false,seenIds);
}
