import { useField } from 'payload/components/forms'

export const ArrayRowLabel = ({ data, index, path: arrayFieldPath }) => {
    // arrayFieldPath example: "Navs.0"
    const path = `${arrayFieldPath}.title`
    const { value } = useField({ path })

    if (value) {
        return data.title;
    }

    return `Nav ${index + 1}`;
}
