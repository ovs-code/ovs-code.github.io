function convert() {
    let text = document.querySelector("#input").value;
    let stripped = text.replace(/^\D+\}/, "").replace(/\\end.*$/,"");

    let output = "[[" + stripped.replaceAll(" ", "").replaceAll("&", ",").replaceAll("\\\\","],[") + "]]";
    document.querySelector("#output").innerHTML = "<code>" + output + "</code>";
}
