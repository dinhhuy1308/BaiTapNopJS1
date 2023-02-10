
/************** Bài tập 1: Tính tiền lương nhân viên**************/
/* 
    Input: oneDaySalary, numberWorkDay
    Progress:
      B1: 
        + Tìm tới thẻ và lấy giá trị
        + Tạo hàm cơ bản
        + Gắn sự kiện click cho button
      B2: trong hàm
        + lấy giá trị từ form
        + Lập công thức tính tiền lương nhân viên
            totalSalary = oneDaySalary * numberWorkDay
        + Hiển thị kết qua UI        
    Output: totalSalary
*/
document.getElementById('btnCalcSalary').onclick = function () {
    var oneDaySalary = document.getElementById('oneDaySalary').value;
    var numberWorkDay = document.getElementById('numberWorkDay').value;

    var totalSalary = 0;

    totalSalary = oneDaySalary * numberWorkDay;

    document.getElementById('totalSalary').innerHTML = totalSalary.toLocaleString() + ' VNĐ';
}




/**************  Bài tập 2: Tính sổ trung bình **************/
/* 
    Input: numberFirst, numberSecond, numberThird, numberFourth, numberFifth
    Progress:
      B1: 
        + Tìm tới thẻ và lấy giá trị
        + Tạo hàm cơ bản
        + Gắn sự kiện click cho button
      B2: trong hàm
        + lấy giá trị từ form
        + Xử lý ép kiểu dữ liệu
        + Lập công thức tính số trung bình
            numberAverage = (numberFirst + numberSecond + numberThird + numberFourth + numberFifth) / 5
        + Hiển thị kết qua UI        

    Output: numberAverage
*/
document.getElementById('btnCalcAvegare').onclick = function () {
    var numberFirst = Number(document.getElementById('numberFirst').value);
    var numberSecond = Number(document.getElementById('numberSecond').value);
    var numberThird = Number(document.getElementById('numberThird').value);
    var numberFourth = Number(document.getElementById('numberFourth').value);
    var numberFifth = Number(document.getElementById('numberFifth').value);

    var numberAverage = 0;

    numberAverage = (numberFirst + numberSecond + numberThird + numberFourth + numberFifth) / 5;

    document.getElementById('numberAverage').innerHTML = numberAverage;
}




/**************  Bài tập 3: Quy đổi tiền. **************/
/* 
    Input: amountVND = 23500, amountUSD
    Progress:
      B1: 
        + Tìm tới thẻ và lấy giá trị
        + Tạo hàm cơ bản
        + Gắn sự kiện click cho button
      B2: trong hàm
        + lấy giá trị từ form
        + Lập công thức tính quy đổi tiền
            totalMoney = amountUSD * amountVND;
        + Hiển thị kết qua UI        

    Output: totalMoney
*/
document.getElementById('btnCalcMoney').onclick = function () {
    var amountVND = 23500;
    var amountUSD = document.getElementById('amountUSD').value;

    var totalMoney = 0;

    totalMoney = amountUSD * amountVND;

    document.getElementById('totalMoney').innerHTML = totalMoney.toLocaleString() + ' VNĐ';
}




/**************  Bài tập 4: Tính diện tích, chu vi hình chữ nhật. **************/
/* 
    Input: length, width
    Progress:
      B1: 
        + Tìm tới thẻ và lấy giá trị
        + Tạo hàm cơ bản
        + Gắn sự kiện click cho button
      B2: trong hàm
        + lấy giá trị từ form
        + Xử lý ép kiểu dữ liệu
        + Lập công thức tính 
            Diện tích: dài x rộng
            Chu vi: (dài + rộng) x 2
        + Hiển thị kết qua UI        
    Output: acreageAndPerimeter
*/
document.getElementById('btnCalc').onclick = function () {
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;

    var acreage = 0;
    var perimeter = 0;

    acreage = length * width;
    perimeter = (Number(length) + Number(width)) *2;
    
    document.getElementById('acreageAndPerimeter').innerHTML = "Diện tích: " + acreage + ";" + " Chu vi: " + perimeter;
}




/**************  Bài tập 5: Tính tổng 2 ký số. **************/
/* 
    Input: twoNumber
    Progress:
      B1: 
        + Tìm tới thẻ và lấy giá trị
        + Tạo hàm cơ bản
        + Gắn sự kiện click cho button
      B2: trong hàm
        + lấy giá trị từ form
        + Xử lý ép kiểu dữ liệu
        + Lập công thức tính 
            totalNumber = tensRow + unitsRow;
        + Hiển thị kết qua UI        
    Output: totalNumber
*/
document.getElementById('btnCalcSum').onclick = function () {
    var twoNumber = document.getElementById('twoNumber').value;

    var totalNumber = 0;

    var tensRow = Math.floor(twoNumber / 10);
    var unitsRow = (twoNumber % 10);
    
    totalNumber = tensRow + unitsRow;

    document.getElementById('totalNumber').innerHTML = totalNumber;
}