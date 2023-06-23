// bài 1:
// input :Phần nhập liệu của đoạn mã này là một phần tử input với thuộc tính type="number" để người dùng nhập số ngày làm việc. Phần tử này có id="day".
// progress: lấy giá trị người dùng nhập vào, sau đo show kết quả  tiền lương 
// output:  Khi người dùng nhấn button, giá trị tiền lương tính được sẽ được gán vào phần tử này để hiển thị cho người dùng.

document.getElementById('salary').onclick = function(){
  
    const daySalary = 100000;
    const daysWorked = document.getElementById('day').value;
    const salary = daySalary * daysWorked;
    document.getElementById("result").innerHTML = `Tiền lương của nhân viên là: ${salary} VND`;

}

// bài 2
// tính giá trị trung bình,: viết chương trình nhập vào 5 số thực, tsinh gái trị trung bình của 5 số này và xuất ra màn hình. (giá trị trung bình là tổng của 5 số ngừoi dùng nhập chia cho 5)
document.getElementById('calculateAverage').onclick= function (){
    const Number1 = document.getElementById('number1').value*1
    const Number2 = document.getElementById('number2').value * 1
    const Number3 = document.getElementById('number3').value* 1
    const Number4 = document.getElementById('number4').value * 1
    const Number5 = document.getElementById('number5').value * 1
    const numberAnverage = (Number1 + Number2 + Number3 + Number4 + Number5)/5
    document.getElementById("showResult").innerHTML = "giá trị trung bình là: " + numberAnverage;
}

// // bài 3:
//      gía USD hiện nay là 23.500VND.viết chương trình quy đổi từ USD sang VND.cho ngừoi dùng nhập vào số tiền USD.Tính và xuất ra gía tiền quy đổi VND.   ví dụ: ngừoi dùng nhập 2 USD, xuất ra 47.000 VND
document.getElementById('convertBtn').onclick = function (){
    const usdRate = 23500;
    const usdAmount = document.getElementById("usdAmount").value;
    const vndAmount = usdAmount * usdRate;

    document.getElementById("result-3").innerHTML = `${usdAmount} USD = ${vndAmount} VND`;
}
// bài 4
// viết chương trình nâhpj vào chiều dài và chiều  rộng của hinhf chữ nhật, tính và xuấtra diện tích, chu vi của hình chữ nhật đó
// công thức: diện tích = chiều dài * chiều rộng
// chuh vi = (chiều dài + chiều rộng)* 2
document.getElementById('chuVi').onclick=function(){
    const chieuDai = document.getElementById('chieudai').value
    const chieuRong = document.getElementById('chieurong').value
    const Chuvi = (chieuDai + chieuRong)/2
    document.getElementById("result-chuvi").innerHTML = "chu vi là: " + Chuvi;
}
document.getElementById('dienTich').onclick = function () {
    const chieuDai = document.getElementById('chieudai').value
    const chieuRong = document.getElementById('chieurong').value
    const Dientich = chieuDai * chieuRong
    document.getElementById("result-dientich").innerHTML = "diện tích là: " + Dientich;
}

// bài tập 5
    // tính tổng 2 ký số: viết chương trình có số nhập vào 1 số có 2 chữ số(vd: 12, 44, 83).tính tổng 2 ký số của số vừa nhập
document.getElementById('tongHaiSo').onclick = function (){

    const soHangChuc = document.getElementById('soHangChuc').value*1

    const soHangDonVi = document.getElementById('soHangDonVi').value*1
    const tongHaiSo = soHangChuc + soHangDonVi

    document.getElementById('result-tongHaiSo').innerHTML = 'Tổng hai ký số là ' + tongHaiSo;
}