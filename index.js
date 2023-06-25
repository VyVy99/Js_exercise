
/**
 * bài 1:
 * input : nhập số ngày làm, khởi tạo lương 1 ngày const daySalary = 100000;
 * progress : 
 * -bước 1: lấy giá trị  id=day
 * -bước 2: tính lương
 * output: show kết quả tiền lương
 *  
 */


document.getElementById('salary').onclick = function () {

    const daySalary = 100000;
    const daysWorked = document.getElementById('day').value;

    const salary = daySalary * daysWorked;

    document.getElementById("result-1").innerHTML = ` ${salary} VND`;

}

// bài 2
// tính giá trị trung bình,: viết chương trình nhập vào 5 số thực, tính giá trị trung bình của 5 số này và xuất ra màn hình. (giá trị trung bình là tổng của 5 số ngừoi dùng nhập chia cho 5)
/**
 * input:khởi tạo 5 số thực từ 5 id lấy từ người dùng nhập
 * progress: Tính tổng 5 số thực
 * output: Show kết quả tổng gia trị trung bình của 5 số
 */
document.getElementById('calculateAverage').onclick = function () {

    const Number1 = document.getElementById('number1').value * 1
    const Number2 = document.getElementById('number2').value * 1
    const Number3 = document.getElementById('number3').value * 1
    const Number4 = document.getElementById('number4').value * 1
    const Number5 = document.getElementById('number5').value * 1

    const numberAveraged = (Number1 + Number2 + Number3 + Number4 + Number5) / 5

    document.getElementById("result-2").innerHTML = "giá trị trung bình là: " + numberAveraged;
}

// // bài 3:
//      gía USD hiện nay là 23.500VND.viết chương trình quy đổi từ USD sang VND.cho ngừoi dùng nhập vào số tiền USD.Tính và xuất ra gía tiền quy đổi VND.   ví dụ: ngừoi dùng nhập 2 USD, xuất ra 47.000 VND
/**
 * input: Khởi tạo giá trị nhập từ ng dùng, số tiền chuyển đổi
 * progress: Tính tổng số tiền dc chuyển dổi sang VND
 * Output: show tổng số tiền
 */
document.getElementById('convertBtn').onclick = function () {

    const usdRate = 23500;
    const usdAmount = document.getElementById("usdAmount").value *1 ;
    
    const vndAmount = usdAmount * usdRate;

    document.getElementById("result-3").innerHTML = `${usdAmount} USD = ${vndAmount} VND`;
}
// bài 4
// viết chương trình nâhpj vào chiều dài và chiều  rộng của hinhf chữ nhật, tính và xuấtra diện tích, chu vi của hình chữ nhật đó
// công thức: diện tích = chiều dài * chiều rộng
// chu vi = (chiều dài + chiều rộng)* 2
/**
 * input: khởi tạo gía trị nhập từ người dùng
 * progress: Tính diện tích và chu vi hình chữ nhật
 * Output: show kết quả diện tích và chu vi hình chữ nhật
 */
document.getElementById('chuVi').onclick = function () {

    const chieuDai = document.getElementById('chieudai').value *1
    const chieuRong = document.getElementById('chieurong').value *1

    const Chuvi = (chieuDai + chieuRong) / 2

    document.getElementById("result-chuvi").innerHTML = "chu vi là: " + Chuvi;
}
document.getElementById('dienTich').onclick = function () {

    const chieuDai = document.getElementById('chieudai').value *1
    const chieuRong = document.getElementById('chieurong').value *1

    const Dientich = chieuDai * chieuRong

    document.getElementById("result-dientich").innerHTML = "diện tích là: " + Dientich;
}

// bài tập 5
// tính tổng 2 ký số: viết chương trình có số nhập vào 1 số có 2 chữ số(vd: 12, 44, 83).tính tổng 2 ký số của số vừa nhập
/**
 * input:  lấy giá trị từ ngừoi dùng nhập 
 * progress: tính số hàng chục và hàng đơn vị, tính tổng 2 số
 * output: show kết quả tổng 2 số hàng chục và đơn vị là
 */
document.getElementById('tongHaiSo').onclick = function () {

    const so = document.getElementById('so-bai-5').value * 1


    const soHangDonVi = Math.floor(so % 10)
    const sohangChuc = Math.floor(so / 10)

    const tongHaiSo = sohangChuc + soHangDonVi

    document.getElementById('result-5').innerHTML = tongHaiSo;
}