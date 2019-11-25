function chose_one(e) {
    var all_index=document.getElementsByClassName("index_box");
    for(var i=0;i<all_index.length;i++){
        all_index[i].style.backgroundColor="#94A5BF";
    }
    e.style.backgroundColor="#EBF3FF";
}