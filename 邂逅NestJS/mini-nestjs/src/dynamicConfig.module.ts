import { DynamicModule, Module } from "./@nestjs/common";

@Module({
  providers: [
    {
      provide: "PREFIX",
      useValue: "prefix",
    },
  ],
  exports: ["PREFIX"],
})
export class DynamicConfigModule {
  static footRoot(
    prefix: string
  ): DynamicModule | Promise<DynamicConfigModule> {
    const providers = [
      {
        provide: "CONFIG",
        useValue: { apiKey: prefix },
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          module: DynamicConfigModule,
          providers,
          exports: providers.map((provider) =>
            provider instanceof Function ? provider : provider.provide
          ),
        });
      }, 30000);
    });

    // return {
    //   module: DynamicConfigModule,
    //   providers,
    //   exports: providers.map((provider) =>
    //     provider instanceof Function ? provider : provider.provide
    //   ),
    // };
  }
}
