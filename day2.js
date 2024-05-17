/*-------------------------------------------------header numbers-------------------------------------------------*/
let nums = document.querySelectorAll(".slide-control p")
let nums_content = document.querySelectorAll(".nums-content div")

nums.forEach(num => {

    num.addEventListener('click', () => {
        let current_num = num
        let current_content = document.getElementById(current_num.dataset.mark)

        //tab btns (category)
        nums.forEach(num => {
            num.classList.remove("active-num")
            current_num.classList.add("active-num")
        })
        //content
        nums_content.forEach(content => {
            content.classList.remove("show")
            current_content.classList.add("show")
        })
    })
})

















/*-----------------------------------------------places imgs slider----------------------------------------------------*/
let slider_imgs = document.querySelectorAll("#asia img")
let america_imgs = document.querySelectorAll("#america img")
let europe_imgs = document.querySelectorAll("#europe img")

//functions
//prev
let before = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].classList.contains("show")) {
            var current_img = arr[i]//var
            var index = i
        }
    }

    if (index == arr.length - 1) {
        current_img.classList.remove("show")
        arr[0].classList.add("show")
    } else {
        current_img.classList.remove("show")
        arr[++index].classList.add("show")
    }
}

//next
let after = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].classList.contains("show")) {
            var current_img = arr[i]//var
            var index = i
        }
    }

    if (index == 0) {
        current_img.classList.remove("show")
        arr[arr.length - 1].classList.add("show")
    } else {
        current_img.classList.remove("show")
        arr[--index].classList.add("show")
    }
}









































/*
let holder = document.querySelector(".projects")
let projects = document.querySelectorAll(".projects .single-pro")
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let count = 0

next.addEventListener("click", () => {
    if (count < 2) {
        projects[count].classList.add("unexist")
        projects[count + 3].classList.remove("unexist")
        count++
    }
    // else {
    //     // count = 0
    //     projects[2].classList.add("unexist")
    //     projects[0].classList.remove("unexist")
    //     // count++
    // }
})

// console.log(holder)


// prev.addEventListener("click", () => {
//     if (count < 2) {
//     projects[count+3].classList.add("unexist")
//     projects[count].classList.remove("unexist")
//     console.log(count)
//     count++
//     }

    // projects[0].classList.add("unexist")
    // projects[4].classList.remove("unexist")

    // holder.innerHTML=projects[1]
    // holder.innerHTML=projects[2]
    // holder.innerHTML=projects[3]
// })
*/