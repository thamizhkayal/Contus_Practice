const fileInp = document.querySelector("#file-inp")
const imgEl = document.querySelector("#img")
const frame = document.querySelector("#iframe")

fileInp.addEventListener("change", (e) => {
    console.log(e.target)
    const file = e.target.files[0]
    const type = file.type

    if (file) {
        const url = window.URL.createObjectURL(file)
        console.log(url)
        console.log(type)

        if (type.includes("image")) {
            imgEl.src = url
            return
        } else if (type.includes("application")) {
            frame.src = `https://view.officeapps.live.com/op/embed.aspx?src=${url}`
        } else {
            console.log("file type is ", type)
        }

    }


})