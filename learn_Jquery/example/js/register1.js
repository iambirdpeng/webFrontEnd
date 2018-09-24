$(document).ready(function() {

	var error_name = true;
	var error_pwd = true;
	var error_confirmpwd = true;
	var error_email = true;
	var error_checkbox = true;
	//var user = null;
	$('#user_name').blur(function(event) {
		name_check();
	});

	$('#pwd').blur(function(event) {
		pwd_check();
	});

	$('#cpwd').blur(function(event) {
		cpwd_check();
	});

	$('#email').blur(function(event) {
		email_check();

	})
	// $('#reg_sub').click(function(event) {
	// 	if($('#allow').prop('checked')==false){
	// 	$('#allow').next().next().html('请同意协议！');
	// 	$('#allow').next().next().show();
	// 	error_checkbox = true;
	// 	}
	// 	else{
	// 		error_checkbox = false;
	// 		$('#allow').next().next().hide();
	// 	}

	// });

	$('.reg_form').submit(function(event) {
		if($('#allow').prop('checked')==false){
		$('#allow').next().next().html('请同意协议！');
		$('#allow').next().next().show();
		error_checkbox = true;
		return false;
		}
		else{
			error_checkbox = false;
			$('#allow').next().next().hide();
		}



	});
	


	function cpwd_check(){
		var cpwd = $('#cpwd').val();
		if(cpwd == ''){
			$('#cpwd').next().html('请确认密码');
			$('#cpwd').next().show();
			error_name = true;
			return;
		}
		if(cpwd == $('#pwd').val()){
			error_confirmpwd = false;
			$('#cpwd').next().hide();
		}
		else{
			$('#cpwd').next().html('两次输入密码不一样，请确认输入');
			$('#cpwd').next().show();
			error_name = true;
		}
	}




	
	function name_check(){
		var name = $('#user_name').val();
		var name_re = /^\w{5,15}$/;
		if(name == ''){
			$('#user_name').next().html('用户名不能为空');
			$('#user_name').next().show();
			error_name = true;
			return;
		}
		if(name_re.test(name)){
			error_name = false;
			$('#user_name').next().hide();
		}
		else{
			error_name = true;
			$('#user_name').next().html('用户名必须为5-15位字母、数字或者下划线');
			$('#user_name').next().show();
		}
		
	}

	function pwd_check(){
		var pwd = $('#pwd').val();
		var re_pwd = /^[\w\?\*]{5,15}$/;
		if(pwd==''){
			$('#pwd').next().html('密码不能为空');
			$('#pwd').next().show();
			error_pwd = true;
			return;
		}

		if(re_pwd.test(pwd)){
			$('#pwd').next().hide();
			error_pwd = false;
		}
		else{
			$('#pwd').next().html('密码必须为字母、数字、$%……&*？5-15位');
			$('#pwd').next().show();
			error_pwd = true;
		}
	}

	function email_check(){
		var email = $('#email').val();
		var email_re = /^\w+@\w+\.\w+$/;
		if(email == ''){
			$('#email').next().html('邮件不能为空');
			$('#email').next().show();
			error_email = true;
			return;
		}
		if(email_re.test(email)){
			error_email = false;
			$('#email').next().hide();
		}
		else{
			error_email = true;
			$('#email').next().html('请填写正确的邮箱');
			$('#email').next().show();
		}
		
	}


})