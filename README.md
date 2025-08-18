# Appium WebdriverIO Project

This project is set up to test iOS and Android apps using Appium and WebdriverIO (WDIO).

## Structure
- `/android` — All Android test specs, configs, and dependencies
- `/ios` — All iOS test specs, configs, and dependencies
- `/android/tests/features` — Android feature files
- `/android/tests/step-definitions` — Android step definitions
- `/android/config/wdio.conf.js` — Android WDIO config
- `/ios/tests/features` — iOS feature files
- `/ios/tests/step-definitions` — iOS step definitions
- `/ios/config/wdio.conf.js` — iOS WDIO config

## Scripts
- `npm test` — Runs the WDIO test runner (from the respective platform folder)

## Getting Started
1. `cd android` or `cd ios`
2. Install dependencies: `npm install`
3. Configure your devices and apps in `/config/wdio.conf.js`
4. Add your test specs in `/tests/features`
5. Run tests with `npm test`

## Dependencies
- webdriverio
- @wdio/cli
- appium
- @wdio/appium-service
- @wdio/browserstack-service
- @wdio/cucumber-framework
- chai

## Notes
- This project is ready for both iOS and Android automation.
- See the WDIO and Appium docs for advanced configuration.
- For CI/CD, see `.github/workflows/browserstack-appium.yml`.
