function drawShape() {
    let line = "*";
    let shape = "";
    let whitespace = "*";
    let spaceIndex = 5;
    for (let index = 1; index < 6; index++) {
        shape += line.repeat(index) + "<br>";
    }
    document.getElementById('shape1').innerHTML = shape;
    shape = "";
    for (let index = 5; index > 0; index--) {
        shape += line.repeat(index) + "<br>";
    }
    document.getElementById('shape2').innerHTML = shape;
    shape = "";
    for (let index = 1; index < 6; index++) {
        shape += "<span>" + whitespace.repeat(spaceIndex) + "</span>" + line.repeat(index) + "<br>";
        spaceIndex--;
    }
    document.getElementById('shape3').innerHTML = shape;
    shape = "";
    for (let index = 5; index > 0; index--) {
        shape += "<span>" + whitespace.repeat(spaceIndex) + "</span>" + line.repeat(index) + "<br>";
        spaceIndex++;
    }
    document.getElementById('shape4').innerHTML = shape;
}