(()=>{
	const images = Array.from( document.getElementsByClassName( 'lazy-load' ) )
	const inViewport = el => {
		let top = el.offsetTop,
			left = el.offsetLeft,
			width = el.offsetWidth,
			height = el.offsetHeight
		while(el.offsetParent) {
			el = el.offsetParent
			top += el.offsetTop
			left += el.offsetLeft
		}
		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		)
	}
	const check = e => {
		images.forEach((img,i)=>{
			if( inViewport( img ) ) {
				img.src = img.getAttribute('data-src')
				images.splice( i , 1 )
			}
		})
	}
	window.addEventListener( 'scroll' , check )
})();