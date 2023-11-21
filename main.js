function numbers(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function negative() {
    if (document.form.textview.value) {
        document.form.textview.value = document.form.textview.value * (-1);
    } 
}

function equal() {
    document.form.textview.value = eval(document.form.textview.value);
}

function percent() {
    if (document.form.textview.value) {
        document.form.textview.value = document.form.textview.value / 100;
    }
}