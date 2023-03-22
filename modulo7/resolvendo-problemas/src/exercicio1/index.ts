const formatText = (text: string): string => {
    const string1 = text.toLocaleLowerCase()
    const result = string1
        .replace(/[óöõô]/gi, "o")
        .replace(/[éèê]/gi, "e")
        .replace(/[íìïî]/gi, "i")
        .replace(/[áãàâ]/gi, "a")
        .replace(/[ùûúü]/gi, "u")
        .replace(/[\,:.´`" "]/gi, "")

    return result

}

const checkPalyndrome = (text: string): boolean => {
    const formatedText = formatText(text)
    const split = formatedText.split("")
    const reverse = split.reverse()
    const newString = reverse.join("")
    const result = newString === formatedText
    return result
}

// testes 
console.log("1", "expected true", checkPalyndrome("ana"))
console.log("2", "expected false", checkPalyndrome("chapéu"))
console.log("3", "expected true", checkPalyndrome("subi no ônibus"))
console.log("4", "expected true", checkPalyndrome("òôóeèóöo"))
console.log("5", "expected true", checkPalyndrome("A dama admirou o rim da amada"))




