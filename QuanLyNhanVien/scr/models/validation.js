function Validation(){
    this.kiemTraRong = function(value, divError, mess) {
        if(value.trim() === "") {
            getEle(divError).innerHTML = mess;
            getEle(divError).style.display = "block";
            return false;
        }
    
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none"
        return true;
    };

    this.kiemTraChucVu = function(idSelect, divError, mess) {
        if(getEle(idSelect).selectedIndex !== 0){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    };

    this.kiemTraDoDaiKiTu = function (value,divError, mess, min, max) {
        if(value.length >= min && value.length <= max){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }

        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    }


    this.kiemTraChuoiKiTu = function(value, divError, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)){
            getEle(divError).innerHTML = "";
            getEle(divError).style.display = "none";
            return true;
        }

        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    };

    this.kiemTraTaiKhoanTrung = function (value, divError, mess, arr) {
        var isExist = false;
    
        for (var i = 0; i < arr.length; i++) {
          var nv = arr[i];
          if (nv.taiKhoan === value) {
            isExist = true;
            break;
          }
        }
    
        if (isExist) {
          getEle(divError).innerHTML = mess;
          getEle(divError).style.display = "block";
          return false;
        }
    
        getEle(divError).innerHTML = "";
        getEle(divError).style.display = "none";
        return true;
      };
}
    