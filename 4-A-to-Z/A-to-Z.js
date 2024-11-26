function AtoZ(number){
    if (typeof number !== "number" || number <= 0 || number > 26 || !Number.isInteger(number)) return "Error";
    let string = "";
    for (let i = 65; i < 65 + number; i++){
        string += `${String.fromCharCode(i)}, `;
        if(i === number + 64) string = string.slice(0, -2)
    }
    return string
}

module.exports = AtoZ