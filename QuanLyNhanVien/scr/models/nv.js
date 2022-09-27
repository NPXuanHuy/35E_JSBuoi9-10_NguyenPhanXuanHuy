function NV (_taiKhoan, _hoTen, _email, _matKhau, _ngayThangNam, _luongCoBan, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayThangNam = _ngayThangNam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    this.tongLuong = function(){
        var tongLuong
        if(this.chucVu === "Sếp") {
            tongLuong = this.luongCoBan*3
        } else if (this.chucVu === "Trưởng phòng") {
            tongLuong = this.luongCoBan*2
        } else if (this.chucVu === "Nhân viên"){
            tongLuong = this.luongCoBan
        } else {
            tongLuong = "Lương"
        }
        return tongLuong;
    }

    this.xepLoai = function(){
        var content = ""
        if(this.gioLam >= 192) {
            content += "Nhân viên xuất sắc";
        } else if (this.gioLam < 192 && this.gioLam>= 176){
            content += "Nhân viên giỏi";
        } else if (this.gioLam < 176 && this.gioLam >= 160) {
            content += "Nhân viên khá"
        } else {
            content += "Nhân viên trung bình";
        }

        return content;
    }
    
}