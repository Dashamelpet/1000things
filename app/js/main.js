const articlesBtn = document.querySelector(".articles__btn");
const articleContent = document.querySelector(".main-article");

articlesBtn.addEventListener("click", function(){
    articleContent.scrollIntoView({ block: "center", behavior: "smooth" });
});

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
    });