
let scale=1
let inlineTransform = "scale(1) translateX(-400px) translateY(-60px)"

export function pasteCss() {
	let $planDocument = document.querySelector('.plan').contentDocument
	
	let linkXmlToStylesheet = document.createElement('style') //тэг для задания стиля в свг
	linkXmlToStylesheet.innerHTML = `@import url(../../plan-style.css);`
	
	let $svgPlan = $planDocument.querySelector('svg')
	$svgPlan.prepend(linkXmlToStylesheet)
}



export function bScaleClicked(dirScale){
	scale = Number((scale + .2*dirScale).toFixed(1))
	inlineTransform = `scale(${scale}) translateX(-400px) translateY(-60px)`
	document.querySelector('.plan').style.transform = inlineTransform
	console.log(inlineTransform)
}