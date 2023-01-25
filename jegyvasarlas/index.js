function osszegszamolas() {
    let fjegy = Number(document.getElementById("fjegy").value);
    let djegy = Number(document.getElementById("djegy").value);

    if (document.getElementById("ulo").checked) {
        document.getElementById("kiir").innerHTML = fjegy*1200+djegy*1000+"HUF";
    }else if (document.getElementById("allo").checked) {
        document.getElementById("kiir").innerHTML = fjegy*700+djegy*500+"HUF";
    }
}