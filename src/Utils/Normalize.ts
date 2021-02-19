export function Normalize(text: string) {
     
    let converted = text.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    return converted.replace(" ", "+")
}

export function Normalize_image(text: string) {
     
    let converted = text.toLowerCase();
    converted = converted.split(" ").join("_");
    converted = converted.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    converted = converted.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    converted = converted.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    converted = converted.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    converted = converted.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    converted = converted.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    converted = converted.replace(new RegExp('[Ç]','gi'), 'c');
    return converted;
}

