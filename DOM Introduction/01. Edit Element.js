function edit(ref,match,replacer){
    let text = ref.textContent;
    let matcher = new RegExp(match,'g');
    text = text.replace(matcher,replacer);

    ref.textContent = text;
}