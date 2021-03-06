/// <reference path='fourslash.ts' />

// @Filename: goToDefinitionDifferentFile_Definition.ts
////var /*remoteVariableDefinition*/remoteVariable;
/////*remoteFunctionDefinition*/function remoteFunction() { }
/////*remoteClassDefinition*/class remoteClass { }
/////*remoteInterfaceDefinition*/interface remoteInterface{ }
/////*remoteModuleDefinition*/module remoteModule{ export var foo = 1;}

// @Filename: goToDefinitionDifferentFile_Consumption.ts
/////*remoteVariableReference*/remoteVariable = 1;
/////*remoteFunctionReference*/remoteFunction();
////var foo = new /*remoteClassReference*/remoteClass();
////class fooCls implements /*remoteInterfaceReference*/remoteInterface { }
////var fooVar = /*remoteModuleReference*/remoteModule.foo;

verify.goToDefinitionForMarkers("remoteVariable", "remoteFunction", "remoteClass", "remoteInterface", "remoteModule");
