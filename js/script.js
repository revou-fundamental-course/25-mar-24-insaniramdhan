function calculateBMI() {
    var gender = document.querySelector("input[name='gender']:checked").value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    
    
    if (weight > 0 && height > 0) {
        var bmi = weight / ((height) * (height));
        var interpretation = interpretBMI(bmi, gender);
        document.getElementById('result').innerHTML = bmi.toFixed(2);
        document.getElementById('interpretation').innerHTML = interpretation;
    } else {
        alert("Harap Masukan Berat dan Tinggi Badan Kamu!.");
    }
}

function interpretBMI(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.5) {
            return 'Jenis Kelamin Kamu adalah Laki-laki dan Kamu Kekurangan Berat Badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Jenis Kelamin Kamu adalah Laki-laki dan Berat Badanmu Normal (ideal)';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Jenis Kelamin Kamu adalah Laki-laki dan Kamu Kelebihan Berat Badan.';
        } else {
            return 'Jenis Kelamin Kamu adalah Laki-laki dan Kamu Mengalami Kegemukan (Obesitas)';
        }
    } else if (gender === 'female') {
        if (bmi < 18.5) {
            return 'Jenis Kelamin Kamu Perempuan dan Kamu Kekurangan Berat Badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Jenis Kelamin Kamu Perempuan dan Berat Badanmu Normal (Ideal)';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Jenis Kelamin Kamu Perempuan dan Kamu Kelebihan Berat Badan';
        } else {
            return 'Jenis Kelamin Kamu Perempuan dan Kamu Megalami Kegemukan (Obesitas)';
        }
    }
}