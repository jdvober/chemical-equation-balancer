export const toPx = ( length: string | number, direction: "width" | "height" ) => {
	const newLength = typeof length === "string" ? parseInt( length ) : length
	if ( direction === "width" ) {
		return ( newLength / 100 ) * window.innerWidth
	}
	return ( newLength / 100 ) * window.innerHeight
}
