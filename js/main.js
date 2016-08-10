toastr.options.timeOut = 3000;

function updateData(_this) {
  var item = $(_this).text();
  $(_this).parent().parent().prev().html(item + '<span class="caret"></span>');

}

function Message(_this, action) {
  var badge = $(_this).parent().parent().children('.message').children('.badge');
  var num = badge.text();
  switch(action) {
    case 0:
      if(num == "") {
        badge.text("1");
      }else{
        badge.text((parseInt(num) + 1).toString());
      }
      break;
    case 1:
      if(parseInt(num) > 1) {
        badge.text((parseInt(num) - 1).toString());
      }else {
        badge.text("");
      }
      break;
    default:
      break;
  }
  if(num != "" || (num == "" && action == 0))
    toastr.info('消息数量已更新。')
}