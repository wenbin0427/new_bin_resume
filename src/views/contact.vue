<template>
    <div class="contact">
        <div class="container mt-5" id="ViewCard">
            <div class="row">
                <div class="col-sm-4 col-md-8 col-xxl-4 col-12 mx-auto position-absolute top-50 start-50 translate-middle z-1 mt-5">
                    <div class="card border-warning-subtle" style="background-color: #353535;">
                        <div class="card-body">
                            <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">姓名</label>
                            <div class="input-group mb-3">
                                <input name="name" type="text" class="form-control w-50" id="name" value="">
                                <select class="form-select" id="call">
                                <option value="先生">先生</option>
                                <option value="小姐">小姐</option>
                                </select>                           
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label" style=" color:#ffc107">您的電子郵件</label>
                                <input name="email" type="text" class="form-control" id="email"  value="">
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label" style=" color:#ffc107">主旨</label>
                                <input name="subject" type="text" class="form-control" id="subject">
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label" style=" color:#ffc107">內容</label>
                                <textarea name="message" id="message" class="form-control" aria-label="With textarea"  rows="10" cols="50"></textarea>
                            </div>
                            <div class="col">
                                <button @click="handleSubmit" id="submail" class="btn btn-success rounded w-100" type="submit" name="submail">傳送</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ok modal d-none " tabindex="-1">
            <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content border border-warning-subtle" style="background-color: #212121;">
                <div class="modal-body" >
                <p class="thank text-center mt-3 text-white"></p>
                <button id="close" type="button" class="btn btn-success mx-auto d-flex mt-4" data-bs-dismiss="modal">返回</button>
                </div>
            </div>
            </div>
        </div>
        <div class="viewback modal-backdrop fade d-none"></div>
    </div>
</template>

<script>

export default{
  name:'contact',
  methods:{
    handleSubmit(){
        const name=$('#name').val();
        const call=$('#call').val();
        const email=$('#email').val();
        const subject=$('#subject').val();
        const message=$('#message').val();
        if(name==""||call==""||email==""||subject==""||message==""){
            $('.thank').text('您還有欄位尚未填寫');
            $('.ok').removeClass('d-none');
            $('.ok').addClass('d-block');
            $('.viewback').removeClass('d-none');
            $('.viewback').addClass('show');
            $('#close').click(function(){
            $('.ok').removeClass('d-block');
            $('.ok').addClass('d-none');
            $('.viewback').removeClass('d-block');
            $('.viewback').addClass('d-none');
            })
        }else{
            var data = {
            'entry.1107420346': name,
            'entry.1675490282': call,
            'entry.243514853': email,
            'entry.766702982': subject,
            'entry.988081046':message
            };
            $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdexI7qBomUCZgGRQWcyP813sAaZso6JV0iuzRvhZSBbwNEFA/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function() {
                $('.thank').text('謝謝您的留言我已收到!我將盡快回覆於您所留存的電子郵件');
                $('.ok').removeClass('d-none');
                $('.ok').addClass('d-block');
                $('.viewback').removeClass('d-none');
                $('.viewback').addClass('show');
                $('#close').click(function(){
                $('.ok').removeClass('d-block');
                $('.ok').addClass('d-none');
                $('.viewback').removeClass('d-block');
                $('.viewback').addClass('d-none');
                })
            }
            });
        }
    }
  },
};


</script>
