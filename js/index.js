$(function () {

    $('form').on('submit',function (e){
        e.preventDefault()
        const data = $(this).serialize()
        postCommentList(data)
        $(this)[0].reset()
        getCommentList()
    })

    getCommentList()

})

function postCommentList(data){
    $.ajax({
        type: 'post',
        url: 'https://ajax-base-api-t.itheima.net/api/addcmt',
        data,
        success:function (res){
            console.log(res.msg)
        }
    })
}

function getCommentList() {
    $.ajax({
        type: 'get',
        url: 'https://ajax-base-api-t.itheima.net/api/cmtlist',
        data: {},
        success: function (res) {
            const {status, msg, data} = res
            console.log(msg)
            if (status === 200) {
                const str = data.map(function (item, index) {
                    const {id, username, content, time} = item
                    return `  <li class="list-group-item">
        <span class="badge" style="background-color: #F0AD4E">评论时间：${time}</span>
        <span class="badge" style="background-color: #5BC0DE">评论人：${username}</span>
        ${content}
        </li>`
                }).join('')
        $('ul').html(str)
            }

        }
    })
}


// https://ajax-base-api-t.itheima.net/
