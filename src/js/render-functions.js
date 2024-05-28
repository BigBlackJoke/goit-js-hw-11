export const renderFunctions = (data, gallery) => {
    const makingGallery = data.hits.map((hit => {
        const list = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const commentsNum = document.createElement('span');
        const comments = document.createElement('span');
        const likesNum = document.createElement('span');
        const likes = document.createElement('span');
        const viewsNum = document.createElement('span');
        const views = document.createElement('span');
        const downloads = document.createElement('span');
        const downloadsNum = document.createElement('span');
        const mainDiv = document.createElement('div');
        const likesDiv = document.createElement('div');
        const viewsDiv = document.createElement('div');
        const commentsDiv = document.createElement('div');
        const downloadsDiv = document.createElement('div');

        a.href = hit.largeImageURL;
        img.src = hit.webformatURL;
        img.alt = hit.tags;
        commentsNum.textContent = hit.comments;
        comments.textContent = "Comments";
        likesNum.textContent = hit.likes;
        likes.textContent = "Likes";
        viewsNum.textContent = hit.views;
        views.textContent = "Views";
        downloadsNum.textContent = hit.downloads;
        downloads.textContent = "Downloads";

        mainDiv.className = 'imageInfo';
        likesDiv.className = 'imageEachInfo';
        viewsDiv.className = 'imageEachInfo';
        commentsDiv.className = 'imageEachInfo';
        downloadsDiv.className = 'imageEachInfo';
                    
        likesDiv.appendChild(likes);
        likesDiv.appendChild(likesNum);
        viewsDiv.appendChild(views);
        viewsDiv.appendChild(viewsNum);
        commentsDiv.appendChild(comments);
        commentsDiv.appendChild(commentsNum);
        downloadsDiv.appendChild(downloads);
        downloadsDiv.appendChild(downloadsNum);
        mainDiv.appendChild(likesDiv);
        mainDiv.appendChild(viewsDiv);
        mainDiv.appendChild(commentsDiv);
        mainDiv.appendChild(downloadsDiv);
        a.appendChild(img);
        list.appendChild(a);
        list.appendChild(mainDiv);
        return list;
    }));
    gallery.innerHTML = '';
    gallery.append(...makingGallery);
};

