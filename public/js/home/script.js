photosUI = () => {//Call API Instagram Feed
    const limit = 9;
    const link_api = "https://v1.nocodeapi.com/manhtuan/instagram/rHLAgFAuUITZbIYw";
    let dataPhoto = [];
    $.ajax({
        url: link_api,
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (let i = 0; i < limit; i++) {
                dataPhoto.push(data.data[i]);
            }
            paginate(dataPhoto);
        },
        error: function () {
            console.log("error");
        }
    });

    paginate = (data) => {
        const total = data.length;
        const col = Math.ceil(total / 3);
        for (let i = 0; i < 3; i++) {
            displayImage(data, col, col * i);
        }
    }

    displayImage = (data, col, s) => {
        for (let i = s; i < (s + col); i++) {
            const info = data[i];
            const urlImage = info.media_type == "IMAGE" ? info.media_url : info.thumbnail_url;
            const caption = info.caption != null ? info.caption : "";
            const time = info.timestamp;
            const user = info.username;
            const child = '<div class="w-100 position-relative mt-2">' +
                '<img class="m-0" src=" '+ urlImage + '" width="100%" />'
                + '<div class="detail-image position-absolute d-flex align-items-end">' 
                + '<div class="control w-100 d-flex align-items-left justify-items-end p-2 flex-column">'
                + '<p class="caption p-0">' + caption + '</p>'
                + '<p class="w-100">' + new Date(time).toDateString() + ' - ' + user + '</p>';
                + '</div>'
                + '</div>'
                + '</div>';
            $('.image-col').eq(s / col).append(child);
        }
    }

}

photosUI();
