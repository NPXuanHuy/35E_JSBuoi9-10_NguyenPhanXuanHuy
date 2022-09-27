var dsnv = new DSNV();
var validation = new Validation();


getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNV(isAdd) {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayThangNam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;


  var isValid = true;

  if(isAdd){
    /**Tai Khoan */
    isValid &= validation.kiemTraRong(
      taiKhoan, 
      "errorTaiKhoan", 
      "(*) Vui long nhap TaiKhoan") &&
    validation.kiemTraDoDaiKiTu(taiKhoan,
      "errorTaiKhoan",
      "(*) Vui long nhap tu 4 - 10 ki tu",
      4,
      10
    ) &&
    validation.kiemTraTaiKhoanTrung(
      taiKhoan,
      "errorTaiKhoan",
      "(*) TaiKhoan da ton tai",
      dsnv.arr
    );
  }

  //hoTen
  isValid &=
    validation.kiemTraRong(
      hoTen, 
      "errorTenNV", 
      "(*) Vui long nhap TenNV") &&
    validation.kiemTraChuoiKiTu(
      hoTen,
      "errorTenNV",
      "(*) Vui long nhap chuoi ki tu"
    );
  
    //Email
  isValid &= validation.kiemTraRong(
    email,
    "errorEmail",
    "(*) Vui long nhap Email"
  );
  //Pass
  isValid &= validation.kiemTraRong(
    matKhau,
    "errorMatKhau",
    "(*) Vui long nhap Pass"
    
  );

  //ngay tháng năm
  isValid &= validation.kiemTraRong(
    ngayThangNam,
    "errorNgayLam",
    "(*) Vui long nhap ngay thang nam"
  );
  //lương cơ bản
  isValid &= validation.kiemTraRong(
    luongCoBan,
    "errorLuongCoBan",
    "(*) Vui long nhap luong co ban"
  );
  //giờ làm
  isValid &= validation.kiemTraRong(
    gioLam,
    "errorGioLam",
    "(*) Vui long nhap gio lam"
  );

  //ChucVu
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "errorChucVu",
    "(*) Vui long chon Chuc Vu"
  );
  
  if(isValid){
    var nv = new NV(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayThangNam,
      luongCoBan,
      chucVu,
      gioLam
    );
  
    nv.tongLuong();
    // var currentFormat = new Intl.NumberFormat("VN-vn");
    // currentFormat.format(nv.tongLuong());
    nv.xepLoai();
    
    return nv;
  }
  return null
  
}

getEle("btnThemNV").addEventListener("click", function () {
  var nv = layThongTinNV(true);

  if (nv) {
    dsnv.themNV(nv);

  renderTable(dsnv.arr);

  setLocalStorage()
  }
  
});

function renderTable(data) {
  // console.log(data);

  var content = "";

  data.forEach(function (nv) {
    content += `
    <tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayThangNam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong()}</td>
    <td>${nv.xepLoai()}</td>
    <td>
    <button class="btn btn-info" onclick="editNV('${nv.taiKhoan}')">Edit</button>
    <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
    </td>
    </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML = content;
}

function editNV(taiKhoan){
  var nv = dsnv.layThongTinChiTietNV(taiKhoan);
  if(nv){
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoTen
    getEle("email").value = nv.email
    getEle("password").value = nv.matKhau
    getEle("datepicker").value = nv.ngayThangNam
    getEle("luongCB").value = nv.luongCoBan
    getEle("chucvu").value = nv.chucVu
    getEle("gioLam").value = nv.gioLam

    /**hien thi CapNhat */
    getEle("btnCapNhat").style.display = "inline-block";

    getEle("btnThemNV").style.display = "none"

  }
}

getEle("btnCapNhat").addEventListener("click", function(){
  var nv = layThongTinNV();
  dsnv.capNhatNV(nv);
  renderTable(dsnv.arr);
  setLocalStorage()
})

function deleteNV(taiKhoan){
  dsnv.xoaNV(taiKhoan);
  renderTable(dsnv.arr);
  setLocalStorage()
}
/** Tim kiem */
getEle("searchName").addEventListener("keyup", function(){
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNV(keyword)

  renderTable(mangTimKiem);
  
})

function setLocalStorage(){
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString)
}

function getLocalStorage() {
  if(localStorage.getItem("DSNV")){
    var dataString = localStorage.getItem("DSNV");
    dsnv.arr = JSON.parse(dataString)
    renderTable(dsnv.arr)
  }
}