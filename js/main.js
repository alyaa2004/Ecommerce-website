window.addEventListener("scroll",() => {
    if (window.scrollY > 100){
        HTMLHeadElement.classlist.add("scroll-down")

    } else{
        headerElement.classlist.remove("scroll-down")
    }
})