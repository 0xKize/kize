export const CONFIG = {
	defaultTheme: 'terminal',
	seasonalTheme: false, // will change the default theme based on the date

	// effects
	effectsDisabledByDefault: false,
	effectsDisabledByDefaultMobile: true,
	displayEffectsSwitch: true,

	// additional effects
	crtEffect: true,
	noiseEffect: true,
	grungeOverlay: true,

	// tabs
	defaultHash: '#home',
	animationOnTabChange: true, // disabled when effects are disabled
	writeAnimationOnTabChange: false, // animationOnTabChange must be true | may cause performance issues

	// blog
	blogUrl: '/src/example/blog.xml', // example: '/src/example/blog.xml'
	useExample: false,
	writeAnimationOnPostOpen: true,
	showEstimatedReadTime: true,
};
