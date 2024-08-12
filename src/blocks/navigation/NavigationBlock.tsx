import {Block} from "payload/types";
import SimpleMenuBlock from "./SimpleMenuBlock";
import ColumnsBlock from "./ColumnsBlock";

const NavigationBlock: Block = {
    slug: 'NavigationBlock', // required
    interfaceName: 'Navigation_Block', // optional
    fields: [
        {
            name: 'content',
            type: 'blocks',
            blocks: [
                SimpleMenuBlock,
                ColumnsBlock
            ]
        }
    ],
}

export default NavigationBlock;
