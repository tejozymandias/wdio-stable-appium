exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    runner: 'local',
    specs: [
        '../tests/features/*.feature'
    ],
    maxInstances: 9,
    capabilities: [
        {
            'bstack:options': {
                deviceName: 'Samsung Galaxy S22 Ultra',
                platformVersion: '12.0',
                platformName: 'android',
            },
            'appium:autoGrantPermissions': true,
        },
        {
            'bstack:options': {
                deviceName: 'Google Pixel 7 Pro',
                platformVersion: '13.0',
                platformName: 'android',
            },
             'appium:autoGrantPermissions': true,
        },
        {
            'bstack:options': {
                deviceName: 'OnePlus 9',
                platformVersion: '11.0',
                platformName: 'android',
            },
               'appium:autoGrantPermissions': true,
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            appiumVersion: '2.15.0',
            debug: true,
            networkLogs: true,
            percy: false,
            percyCaptureMode: 'auto',
        },
    },
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
        testObservability: true,
        testObservabilityOptions: {
                'projectName': 'ColorNote Automation',
                'buildName': 'wdio android build',
                'buildTag': 'Automation',
                'sessionName': 'ColorNote Test Session',
                'sessionDescription': 'This is a test session for ColorNote app automation',
                'testRunName': 'ColorNote Test Run',
                'testRunDescription': 'This is a test run for ColorNote app automation',
                'testRunTags': ['ColorNote', 'Automation'],
                'testRunType': 'functional',
                'testRunStatus': 'passed',
            },
        app: 'bs://3008dac1c7f39f07b79761012c804015657a031a',
        browserstackLocal: false,
      },
    ]
  ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./tests/step-definitions/*.steps.js'],
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
