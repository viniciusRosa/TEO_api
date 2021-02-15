function Normalize(text: string) {
     
    let converted = text.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    return converted.replace(" ", "+")
}

export default Normalize;