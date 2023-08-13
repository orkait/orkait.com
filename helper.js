export const classAdd = (prev, curr) => {
	if (curr) {
		return prev + " " + curr;
	}
	return prev;
};

export const styleAdd = (style) => {
    if (style){
        return style
    }
}