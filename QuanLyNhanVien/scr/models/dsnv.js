function DSNV () {
    this.arr = [];

    this.themNV = function(nv) {
        this.arr.push(nv);
    }


    this.timViTriNV = function(taiKhoan){
        var index = -1;
        this.arr.forEach(function(nv, i){
            if(nv.taiKhoan === taiKhoan)
            index = i;
        });
        return index;
    }

    this.xoaNV = function(taiKhoan){
       var index = this.timViTriNV(taiKhoan)
        if(index !== -1){
            this.arr.splice(index, 1);
        }
    }

    this.layThongTinChiTietNV = function(taiKhoan){
        var index = this.timViTriNV(taiKhoan);

        if(index !== -1) {
            return this.arr[index];

        }
        return null
    }

    this.capNhatNV = function(nv){
        var index = this.timViTriNV(nv.taiKhoan)
        if (index !== -1) {
            this.arr[index] = nv
        }
    };


    
    this.timKiemNV = function(keyword){
        var mangTimKiem = [];
        this.arr.forEach(function(nv){
            var hoTen = nv.hoTen.toLowerCase();
            var Search = keyword.toLowerCase();
            if(hoTen.indexOf(Search)!== -1) {
                mangTimKiem.push(nv)
            }
        })
        return mangTimKiem;
    };
}