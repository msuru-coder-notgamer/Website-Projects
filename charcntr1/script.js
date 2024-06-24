let text;
let noSpacesString;
const charspace = document.getElementById("charspace")
const charnospace = document.getElementById("charnospace")
const charspaceonly = document.getElementById("charspaceonly")

function lengthNoSpaces(stringToChange) {
    noSpacesString = stringToChange.replace(/\s+/g, '');
    return noSpacesString.length;
}
function lengthOnlySpaces(stringToChange) {
    spaces = stringToChange.replace(/[^\s]/g, '');
    return spaces.length;
}
function length(string) {
    charspace.innerHTML = `${string.length} characters (including space)`;
    charnospace.innerHTML = `${lengthNoSpaces(string)} characters (not including space)`;
    charspaceonly.innerHTML = `${lengthOnlySpaces(string)} spaces`;
}