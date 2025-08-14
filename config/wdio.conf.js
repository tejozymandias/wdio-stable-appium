exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    runner: 'local',
    specs: [
        '../tests/**/app_launch.feature'
    ],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'bstack:options': {
                deviceName: 'Samsung Galaxy S22 Ultra',
                platformVersion: '12.0',
                appiumVersion: '2.15.0',
                projectName: 'ColorNote Automation',
                buildName: 'wdio andriod build',
                sessionName: 'ColorNote Test Session'
            },
            'appium:autoGrantPermissions': true
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
   services: [
    [
      'browserstack',
      {
        app: 'bs://3008dac1c7f39f07b79761012c804015657a031a',
        browserstackLocal: false
      },
    ]
  ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./tests/step-definitions/app_launch.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
