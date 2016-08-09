toastr.options.timeOut = 3000;

function updateData(_this) {
  var item = $(_this).text();
  $(_this).parent().parent().prev().html(item + '<span class="caret"></span>');

}

function Message(_this, action) {
  var num = $(_this).parent().parent().children('.message').children('.badge').text();
  switch(action) {
    case 0:
      if(num == "") {
        $(_this).parent().parent().children('.message').children('.badge').text("1");
      }else{
        $(_this).parent().parent().children('.message').children('.badge').text((parseInt(num) + 1).toString());
      }
      break;
    case 1:
      if(parseInt(num) > 1) {
        $(_this).parent().parent().children('.message').children('.badge').text((parseInt(num) - 1).toString());
      }else {
        $(_this).parent().parent().children('.message').children('.badge').text("");
      }
      break;
    default:
      break;
  }
  if(num != "")
    toastr.info('消息数量已更新。')
}