document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('filterDropdown').addEventListener('change', function () {
        var selectedValue = this.value;
        var contain = document.querySelector('#soundCovers');
        var allImages = document.querySelectorAll('.albCov');
        var singleArtImages = document.querySelectorAll('.singleArt');
        var epArtImages = document.querySelectorAll('.epArt');
        singleArtImages.forEach(function (image) { image.style.display = 'none'; });
        epArtImages.forEach(function (image) { image.style.display = 'none'; });
        if (selectedValue === 'single') { singleArtImages.forEach(function (image) { image.style.display = 'grid'; }); }
        else if (selectedValue === 'ep') { epArtImages.forEach(function (image) { image.style.display = 'block'; }); }
        else if (selectedValue === 'reset') { allImages.forEach(function (image) { image.style.display = 'grid'; }); }
    });
});
document.querySelectorAll(".albCov img").forEach((e => { e.addEventListener("mousemove", (t => { const o = e.getBoundingClientRect(), n = t.clientX - o.left, r = t.clientY - o.top, a = o.width, d = -50 * (r / o.height - .5), l = -50 * (.5 - n / a); e.style.transform = `rotateX(${d}deg) rotateY(${l}deg)` })), e.addEventListener("mouseleave", (() => { e.style.transform = "rotateX(0deg) rotateY(0deg)" })) }));