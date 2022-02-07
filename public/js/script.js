photosUI = () => {//Call API Instagram Feed
    const link_api = "https://v1.nocodeapi.com/manhtuan/instagram/rHLAgFAuUITZbIYw";

    $.ajax({
        url: link_api,
        type: "GET",
        dataType: "json",
        success: function (data) {
            paginate(data);
        },
        error: function () {
            console.log("error");
        }
    });

    paginate = (data) => {
        const total = data.data.length;
        const col = Math.ceil(total / 3);
        for (let i = 0; i < 3; i++) {
            displayImage(data, col, col * i);
        }
    }

    displayImage = (data, col, s) => {
        for (let i = s; i < (s + col); i++) {
            const info = data.data[i];
            const urlImage = info.media_type == "IMAGE" ? info.media_url : info.thumbnail_url;
            const child = '<img class="mt-2" src="' + urlImage + '" width="100%" />';
            $('.image-col').eq(s / col).append(child);
        }
    }

}

photosUI();
