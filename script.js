var text = document.createElement("h1")
text.setAttribute("class","display-3 font-weight-bold")
document.body.append(text)
function t10() {
    setTimeout(() => {
        text.innerHTML = "10"
        t9()
    }, 1000)
    function t9() {
        setTimeout(() => {
            text.innerHTML = "9"
            t8()
        }, 1000)
        function t8() {
            setTimeout(() => {
                text.innerHTML = "8"
                t7()
            }, 1000)
            function t7() {
                setTimeout(() => {
                    text.innerHTML = "7"
                    t6()
                }, 1000)
                function t6() {
                    setTimeout(() => {
                        text.innerHTML = "6"
                        t5()
                    }, 1000)
                    function t5() {
                        setTimeout(() => {
                            text.innerHTML = "5"
                            t4()
                        }, 1000)
                        function t4() {
                            setTimeout(() => {
                                text.innerHTML = "4"
                                t3()
                            }, 1000)
                            function t3() {
                                setTimeout(() => {
                                    text.innerHTML = "3"
                                    t2()
                                }, 1000)
                                function t2() {
                                    setTimeout(() => {
                                        text.innerHTML = "2"
                                        t1()
                                    }, 1000)
                                    function t1() {
                                        setTimeout(() => {
                                            text.innerHTML = "1"
                                            display()
                                        }, 1000)
                                        function display() {
                                            setTimeout(() => {
                                                text.innerHTML = "Happy Independence day!!!🤩"
                                            }, 1000)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

t10()