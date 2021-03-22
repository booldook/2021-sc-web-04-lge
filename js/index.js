$(".main-wrapper .pager-wrapper a.pager").click(function(){
	$(".main-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})

$(".main-wrapper .pager-wrapper .bt-play").click(function(){
	$(".main-wrapper .pager-wrapper .bt-play").addClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").removeClass('active')
})

$(".main-wrapper .pager-wrapper .bt-pause").click(function(){
	$(".main-wrapper .pager-wrapper .bt-play").removeClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").addClass('active')
})