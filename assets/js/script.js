$(function () {

    $("#enviar").click(function(){
        alert("El mensaje ha sido enviado exitosamente")
    })

    $("a").click(function () {

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
            200
        )

    });

    $(document).scroll(function () {
        const pixel = $("html").scrollTop()
    
        if (pixel > 300) {
            $("nav").addClass("nav-black")
        } else {
            $("nav").removeClass("nav-black")
        }
    
    })
});



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})



