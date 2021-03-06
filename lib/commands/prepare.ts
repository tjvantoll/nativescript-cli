///<reference path="../.d.ts"/>

export class PrepareCommand implements ICommand {
	constructor(private $platformService: IPlatformService,
		private $platformCommandParameter: ICommandParameter) { }

	execute(args: string[]): IFuture<void> {
		return (() => {
			this.$platformService.preparePlatform(args[0]).wait();
		}).future<void>()();
	}

	allowedParameters = [this.$platformCommandParameter];
}
$injector.registerCommand("prepare", PrepareCommand);
