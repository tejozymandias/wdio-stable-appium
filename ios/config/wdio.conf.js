exports.config = {
    user: 'tejendra_UwDiBS',
    key: 'hsKARzJnzsqm8tCeAA7Q',
    hostname: 'hub.browserstack.com',
    runner: 'local',
    specs: [
        './tests/features/*.feature'
    ],
    maxInstances: 3,
    capabilities: [
        {
            'bstack:options': {
                deviceName: 'iPhone 14 Pro',
                platformVersion: '16.0',
                platformName: 'ios',
            }
        },
        {
            'bstack:options': {
                deviceName: 'iPhone 13',
                platformVersion: '15.0',
                platformName: 'ios',
            }
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            appiumVersion: '2.15.0',
            debug: true,
            networkLogs: true,
            percy: false,
            percyCaptureMode: 'auto'
        },
        'appium:autoGrantPermissions': true
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
                'buildName': 'wdio ios build',
                'buildTag': 'Automation',
                'sessionName': 'ColorNote iOS Test Session',
                'sessionDescription': 'This is a test session for ColorNote app automation (iOS)',
                'testRunName': 'ColorNote iOS Test Run',
                'testRunDescription': 'This is a test run for ColorNote app automation (iOS)',
                'testRunTags': ['ColorNote', 'Automation', 'iOS'],
                'testRunType': 'functional',
                'testRunStatus': 'passed',
                'testRunStartTime': new Date().toISOString(),
                'testRunEndTime': new Date().toISOString(),
                'testRunDuration': 0,
        },
        app: 'bs://your-ios-app-id',
        browserstackLocal: false
      },
    ]
  ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./ios/tests/step-definitions/*.steps.js'],
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
