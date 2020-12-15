var tabbar = document.querySelectorAll('.tabbar>div:not([class="none"])');
tabbar.forEach(function(item, index, lists) {
    item.onclick = function() {
        lists.forEach(function(item) {
            item.style.color = 'black';
        })
        this.style.color = 'blue';
    }
})