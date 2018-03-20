

const letsDoThis = async () => {
	const reactTestModule = await import('./src/ReactTest.mjs');
	const otherReactTest = await import('./src/OtherReactTest.js');
	const statelessReactTest = await import('./src/statelessReactTest');

	console.log('react mjs test: ', reactTestModule);
	console.log('react js test: ', otherReactTest);
	console.log('stateless react test: ', statelessReactTest);
}

letsDoThis().catch((error) => {
	console.log('error!', error);
});
